import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import useCart from "../../../hooks/usecart";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from 'sweetalert2'

const Cart = () => {
    const [cart,refetch] = useCart()
    const totalPrice = cart.length>0?cart.reduce((total, item) => total + item.price, 0):0
    const axiosSecure = useAxiosSecure()
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div className="">
            <SectionTitle Heading={'wanna add more'} subHeading={"mycart"}></SectionTitle>

            <div className="flex justify-evenly mx-[120px] mb-5">
                <h2 className="text-3xl font-semibold uppercase">Total orders: {cart.length}</h2>
                <h2 className="text-3xl font-semibold uppercase">total price: ${totalPrice}</h2>
                {
                 cart.length? <Link to={'/dashboard/payment'}><button className="px-5 py-2 bg-[#D1A054] rounded-md text-white">Pay</button></Link>:
                 <button disabled className="px-5 py-2 bg-[#D1A054] rounded-md text-white">Pay</button>

                }
            </div>
            <div className="overflow-x-auto mx-[120px]">

                <table className="table rounded-lg">
                    {/* head */}
                    <thead className="">
                        <tr className=" bg-[#D1A054] text-white">
                            <th>

                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, idx) => <tr key={item._id}>
                                <th>
                                    <p>{idx + 1}</p>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="rounded-md w-12 h-12">
                                                <img src={item.image} alt="" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>

                                    <span className="">{item.name}</span>
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="p-2 bg-[#B91C1C] btn-sm rounded-md text-xl text-white h-full "><RiDeleteBin5Fill /></button>
                                </th>
                            </tr>)
                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Cart;