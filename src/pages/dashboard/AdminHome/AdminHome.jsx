import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";


const AdminHome = () => {
    const axiosSecure = useAxiosSecure()
    const { data: stats, isPending } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    })
    if (isPending) {
        return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    return (
        <div className="mt-5">
            <div className="flex gap-3 justify-evenly">
                <div className="border-2 rounded-lg border-sky-200 p-10">
                    <h2 className="text-3xl">users:{stats.users}</h2>
                </div>
                <div className="border-2 rounded-lg border-sky-200 p-10">
                    <h2 className="text-3xl">revenue:${stats.revenue}</h2>
                </div>
                <div className="border-2 rounded-lg border-sky-200 p-10">
                    <h2 className="text-3xl">orders:{stats.orders}</h2>
                </div>
            </div>

        </div>
    );
};

export default AdminHome;