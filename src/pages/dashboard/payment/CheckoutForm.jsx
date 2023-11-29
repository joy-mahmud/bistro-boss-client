import { CardElement, CartElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import useCart from "../../../hooks/usecart";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {
    const [error, setError] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const [cart,refetch] = useCart()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error', error)
            setError(error.message)
        }
        else {
            console.log(paymentMethod)
            setError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            setTransactionId(paymentIntent.id)
            const payment = {
                email: user.email,
                price: totalPrice,
                transactionId:paymentIntent.id,
                date: new Date(),
                cartIds: cart.map(item => item._id),
                menuIds: cart.map(item => item.menuId),
                status: 'pending'

            }
            const res = await axiosSecure.post('/payments', payment)
            console.log(res.data)
            refetch()
            if(res.data?.paymentResult?.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  }); 
                  navigate('/dashboard/paymentHistory')
            }

        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#42770',
                            '::placeholder': {
                                color: '#aab7c4'
                            }
                        },
                        invalid: {
                            color: '#9e2146'
                        }
                    }
                }}

            ></CardElement>
            <div className="text-center my-5"><button className="btn btn-primary w-1/4" type="submit" disabled={!stripe || !clientSecret}>pay</button>
                <p className="text-red-500 mt-5 font-semibold">{error}</p>
                {
                    transactionId && <p className="text-green-500 text-xl font-semibold"> Transaction id: {transactionId}</p>
                }
            </div>


        </form>
    );
};

export default CheckoutForm;