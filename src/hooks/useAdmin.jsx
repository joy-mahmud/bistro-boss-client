import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const {user,loading}= useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const {data:isAdmin,isPending:isAdminLoading}= useQuery({
        queryKey:[user?.email,'admin'],
        enabled:!loading,
        queryFn: async ()=>{
         const res = await axiosSecure.get(`/users/admin/${user.email}`)
         return res.data?.admin
        }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;
