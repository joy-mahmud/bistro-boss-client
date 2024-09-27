import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaPager, FaShoppingCart, FaUser, FaUsers, FaUtensilSpoon, FaUtensils } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    return (
        <div className="flex">

            {/* dashboard sidebar */}

            <div className="w-64 h-screen bg-orange-900 p-4 text-white">
                <div className="uppercase w-full mb-5">
                    <h2 className="text-3xl font-bold ">Bistro boss</h2>
                    <p className="text-xl font-medium">Restaurant</p>
                </div>
                <div>
                    <ul className="space-y-2">
                        {
                            isAdmin ? <>
                                <li>
                                    <NavLink to={'/dashboard/adminHome'} className="flex items-center gap-2"><FaHome /><p className="uppercase">Admin home</p></NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/addItem'} className="flex items-center gap-2"><FaUtensils /><p className="uppercase">add items</p></NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/manageItems'} className="flex items-center gap-2"><FaList /><p className="uppercase">Manage items</p></NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/paymentHistory'} className="flex items-center gap-2"><FaPager /><p className="uppercase">Payment history</p></NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to={'/dashboard/manageBookings'} className="flex items-center gap-2"><FaBook /><p className="uppercase">Manage Bookings</p></NavLink>
                                </li> */}
                                <li>
                                    <NavLink to={'/dashboard/allUsers'} className="flex items-center gap-2"><FaUsers /><p className="uppercase">All users</p></NavLink>
                                </li>

                                {/* {divider} */}
                                <div className="divider"></div>

                                <li>
                                    <NavLink to={'/dashboard/userHome'} className="flex items-center gap-2"><FaHome /><p className="uppercase">User home</p></NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to={'/dashboard/reservation'} className="flex items-center gap-2"><FaCalendar /><p className="uppercase">reservation</p></NavLink>
                                </li> */}
                                <li>
                                    <NavLink to={'/dashboard/cart'} className="flex items-center gap-2"><FaShoppingCart /><p className="uppercase">My cart</p></NavLink>
                                </li>

                                {/* <li>
                                    <NavLink to={'/dashboard/review'} className="flex items-center gap-2"><FaAd /><p className="uppercase">add review</p></NavLink>
                                </li> */}
                                {/* <li>
                                    <NavLink to={'/dashboard/booking'} className="flex items-center gap-2"><FaList /><p className="uppercase">My Bookings</p></NavLink>
                                </li> */}
                                <li>
                                    <NavLink to={'/dashboard/contact'} className="flex items-center gap-2"><FaEnvelope /><p className="uppercase">contact</p></NavLink>
                                </li>

                            </> : <>
                                {/* <li>
                                    <NavLink to={'/dashboard/userHome'} className="flex items-center gap-2"><FaHome /><p className="uppercase">User home</p></NavLink>
                                </li> */}
                                <li>
                                    <NavLink to={'/dashboard/reservation'} className="flex items-center gap-2"><FaCalendar /><p className="uppercase">reservation</p></NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/cart'} className="flex items-center gap-2"><FaShoppingCart /><p className="uppercase">My cart</p></NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to={'/dashboard/review'} className="flex items-center gap-2"><FaAd /><p className="uppercase">add review</p></NavLink>
                                </li> */}
                                <li>
                                    <NavLink to={'/dashboard/booking'} className="flex items-center gap-2"><FaList /><p className="uppercase">My Bookings</p></NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dashboard/contact'} className="flex items-center gap-2"><FaEnvelope /><p className="uppercase">contact</p></NavLink>
                                </li>
                            </>
                        }
                    </ul>
                </div>

            </div>
            {/* dashboad content */}
            <div className="flex-1">
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default Dashboard;