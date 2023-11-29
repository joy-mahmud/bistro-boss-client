import { RiDeleteBin5Fill } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
    
        const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    const handleMakeAdmin =(user)=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            if(res.data.modifiedCount>0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name}`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
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
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "user has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div>
            <SectionTitle Heading={'manage all users'} subHeading={"How many"}></SectionTitle>

            <div className="flex justify-evenly mx-[120px] mb-5">
                <h2 className="text-3xl font-semibold uppercase">Total users: {users.length}</h2>

            </div>
            <div className="overflow-x-auto mx-[120px]">

                <table className="table rounded-lg">
                    {/* head */}
                    <thead className="">
                        <tr className=" bg-[#D1A054] text-white">
                            <th>

                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>
                                    <p>{idx + 1}</p>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <span className="">{user.name}</span>

                                    </div>
                                </td>
                                <td>

                                    <span className="">{user.email}</span>
                                </td>
                                <td>
                                    {user.role==='admin'?'admin':<button onClick={()=>handleMakeAdmin(user)} className="p-2 bg-[#D1A054] btn-sm rounded-md text-xl text-white h-full "><FaUsers /></button>}
                                    
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(user._id)} className="p-2 bg-[#B91C1C] btn-sm rounded-md text-xl text-white h-full "><RiDeleteBin5Fill /></button>
                                </th>
                            </tr>)
                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default AllUsers;