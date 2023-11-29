import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import useCart from "../../hooks/usecart";


const Ordercard = ({ item }) => {
    const { image, name, recipe,price,_id } = item
    const {user} = useContext(AuthContext)
    const location =useLocation()
    const axiosSecure = useAxiosSecure()
    const [,refetch] = useCart()
    const navigate = useNavigate();
    const handleAddToCart =()=>{
        if(user && user.email){
           
            const cartItem={
                menuId:_id,
                email:user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/addtocart',cartItem)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} is added to the cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch()
                }
            })

        }
        else{
            Swal.fire({
                title: "Please log in to add to cart?",
                text: "You want to log in?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login',{state:{from:location}})
                }
              });
        }
    }
    return (
        <div className="bg-[#F3F3F3] relative">
            <img className='h-[350px] w-full' src={image} alt="" />
            <div className="flex flex-col items-center p-5 space-y-3">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-[#737373]">{recipe}</p>
                <button onClick={handleAddToCart} className="uppercase bg-[#E8E8E8] rounded-lg border border-b-[#BB8506] border-b-4  hover:bg-[#1F2937]  px-5 py-3 text-[#BB8506]">Add to cart</button>
            </div>
            <button className="absolute bg-[#111827] px-8 rounded-md right-5 top-5 py-2 text-white">${price}</button>
        </div>
    );
};

export default Ordercard;