import { RiDeleteBin5Fill } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/UseMenu/Usemenu";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ManageItem = () => {
    const [menu,loading,refetch] = useMenu()
    const axiosSecure = useAxiosSecure()
    if(loading){
        return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
               const res=await axiosSecure.delete(`/menu/${id}`)
                   
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "The item has been deleted.",
                                icon: "success"
                            });
                        }
                   

            }
        });
    }
    return (
        <div>
            <SectionTitle Heading={'manage all items'} subHeading={'hurry up'}></SectionTitle>
            <div className=" mx-[120px] mb-5">
                <h2 className="text-3xl font-semibold uppercase">Total Items: {menu.length}</h2>
               
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
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menu.map((item, idx) => <tr key={item._id}>
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
                                    <Link to={`/dashboard/updateItem/${item._id}`}><button  className="p-2 bg-[#D1A054] btn-sm rounded-md text-xl text-white h-full "><FaEdit /></button></Link>
                                </th>
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

export default ManageItem;
