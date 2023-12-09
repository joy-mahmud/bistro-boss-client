import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

 const axiosSecure = axios.create({
    baseURL:'https://bistro-boss-server-ebon.vercel.app'
})

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()

    //interceptor for request
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        config.headers.authorization=`Bearer ${token}`
        return config
    },function(error){
        return Promise.reject(error)
    })
    // interceptor for response 
    axiosSecure.interceptors.response.use(function(response){
        return response
    }, async function(error){
        const status = error.response.status
        console.log(status)
        if (status===401 || status===403){
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error)
    })


        return axiosSecure
    
};

export default useAxiosSecure;
