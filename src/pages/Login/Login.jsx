import loginImg from '../../assets/others/authentication1.png'
// import loginbg from '../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../SocialLogin/GoogleLogin';


const Login = () => {
    const {signIn}=useContext(AuthContext)
    const [disabled,setDisabled]=useState(true)
    const location = useLocation()
    const navigate = useNavigate()
    const from =location.state?.from?.pathname || '/'
   
   useEffect(()=>{
    loadCaptchaEnginge(6);
   },[])
    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value 
        const password = form.password.value 
     signIn(email,password)
     .then(res=>{
        navigate(from,{replace:true})
     })
     

    }
    const checkCaptcha =(e)=>{
        const captchaValue = e.target.value 
        console.log(captchaValue)
        if (validateCaptcha(captchaValue)) {
            setDisabled(false)
            console.log('validated')
        }
   
        else {
           setDisabled(true)
        }
    }
    return (
        <div className="flex justify-center items-center">
            <div className=''>
                <img className='w-[648px] h-[453px]' src={loginImg} alt="" />
            </div>
            <div className="w-1/3 ">
                <form onSubmit={handleSubmit} className='space-y-2' >
                    <div>
                        <label>Email</label><br />
                        <input type="email" name="email" placeholder="Your email" className="input input-bordered w-full " />
                    </div>
                    <div>
                        <label>password</label><br />
                        <input type="password" name="password" placeholder="your password" className="input input-bordered w-full " />
                    </div>
                   <div className='p-2 border-2 rounded-lg'>
                   < LoadCanvasTemplate /> 
                   </div>
                    <div>

                        <input type="text" onBlur={checkCaptcha} name='captcha' placeholder="Enter captcha here" className="input input-bordered w-full " />
                        
                    </div>
                    <div>
                        <button disabled={disabled} className="bg-[#DBB984] py-2 rounded-lg outline-none text-center text-white w-full">Sign in</button>
                    </div>
                </form>
                <GoogleLogin></GoogleLogin>
            </div>
        </div>
    );
};

export default Login;