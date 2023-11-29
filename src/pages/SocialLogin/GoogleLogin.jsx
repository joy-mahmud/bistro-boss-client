import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const GoogleLogin = () => {
    const {googlesignIn} =useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleSignIn =()=>{
        googlesignIn()
        .then(res=>{
            console.log(res.user)
            const userInfo ={
                name:res.user.displayName,
                email:res.user.email
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)
                navigate('/')
            })

        })
        .catch(error=>console.log(error))
    }
    return (
        <div className="mt-3">
            <button onClick={handleGoogleSignIn} className=" flex  items-center justify-center gap-3 text-xl font-bold text-[#264E99] py-2 rounded-lg outline-none border-2 border-[#264E99] text-center w-full"><FaGoogle></FaGoogle> Google</button>
        </div>
    );
};

export default GoogleLogin;