import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Menu from "../../pages/Menu/Menu";
import Order from "../../pages/order/Order";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/signUp/SignUp";
import Dashboard from "../../layout/Dashboard";
import Cart from "../../pages/dashboard/cart/Cart";
import PrivateRoute from "../Private/PrivateRoute";
import AllUsers from "../../pages/dashboard/Allusers/AllUsers";
import AddItem from "../../pages/dashboard/AddItem/AddItem";
import AdminRoute from "../AdminRoute/AdminRoute";
import ManageItem from "../../pages/dashboard/ManageItem/ManageItem";
import UpdateItem from "../../pages/dashboard/UpdateItem/UpdateItem";
import Payment from "../../pages/dashboard/payment/Payment";
import PaymentHistory from "../../pages/dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../../pages/dashboard/AdminHome/AdminHome";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'menu',
            element:<Menu></Menu>
        },
        {
            path:'order/:category',
            element:<Order></Order>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'userHome',
          element:<AdminHome></AdminHome>
        },
        {
          path:'cart',
          element:<Cart></Cart>
        },
       
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
        //admin only
        {
          path:'adminHome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:'addItem',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path:'manageItems',
          element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
        },
        {
          path:'updateItem/:id',
          element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader:({params})=>fetch(`https://bistro-boss-server-ebon.vercel.app/menu/${params.id}`)
        },
        {
          path:'allUsers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>

        }
      ]
    }
  ]);