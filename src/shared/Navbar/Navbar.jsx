
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
import shopIcon from '../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import useCart from '../../hooks/usecart';
import useAdmin from '../../hooks/useAdmin';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = useAdmin()
    const [cart] = useCart()
    const handleLogout = () => {
        logOut()
            .then(res => console.log("logout successful"))
            .catch(err => console.log(err))
    }
    return (
        <div className="navbg py-5 fixed z-10 w-full text-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="">
                    <h2 className="text-3xl font-extrabold">Bistro Boss</h2>
                    <h3 className="text-2xl font-bold">Restaurant</h3>
                </div>
                <ul className="flex gap-5 font-bold text-xl">
                    <li className=''><NavLink>Home</NavLink></li>
                    <li><NavLink>contact us</NavLink></li>
                    {
                        user && isAdmin && <li><NavLink to={'dashboard/adminHome'}>Dashboard</NavLink></li>

                    }
                    {
                        user && !isAdmin && <li><NavLink to={'dashboard/userHome'}>Dashboard</NavLink></li>
                    }

                    <li><NavLink to={'/menu'}>Our Menu</NavLink></li>
                    <li className='flex relative'><span><NavLink to={'/order/salad'}>Our Shop</NavLink></span><Link to={'/dashboard/cart'}><img className='w-[60px] h-[45px]' src={shopIcon} alt="" /><div className="absolute badge badge-secondary bottom-[3px] -right-[11px]">+{cart.length}</div></Link></li>
                    <li>
                        {
                            user ? <><button onClick={handleLogout} className=''>LogOut</button></> : <NavLink to={'/login'}>Login</NavLink>
                        }
                    </li>


                </ul>
            </div>
        </div>
    );
};

export default Navbar;