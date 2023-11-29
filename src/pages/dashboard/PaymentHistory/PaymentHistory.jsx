import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";


const PaymentHistory = () => {
    const axiosSecure =useAxiosSecure()
    const {user}=useContext(AuthContext)

    const {refetch,data: paymentHistory=[]} =useQuery({
        queryKey:['paymentHistory',user?.email],
        queryFn:async ()=>{
            const res = await axiosSecure.get(`/paymentHistory/${user.email}`)
            return res.data
        }
    })

    return (
        <div>
            <SectionTitle Heading={'Payment history'} subHeading={'payment details'}></SectionTitle>
            <div className="overflow-x-auto mx-[120px]">

                <table className="table rounded-lg">
                    {/* head */}
                    <thead className="">
                        <tr className=" bg-[#D1A054] text-white">
                           
                            <th>Email</th>
                            <th>Transaction Id</th>
                            <th>Total Price</th>
                            <th>Payment Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            paymentHistory.map((item, idx) => <tr key={item._id}>
                              
                                <td>
                                   {item.email}    
                                </td>
                                <td>

                                    <span className="">{item.transactionId}</span>
                                </td>
                                <td>{item.price}</td>
                                <th>
                                   {item.date}
                                </th>
                                <td>
                                    {item.status}
                                </td>
                            </tr>)
                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
