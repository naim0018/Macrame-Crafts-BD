import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Component/Pages/ErrorElement/Error";
import Home from "../Component/Pages/HomePage/Home/Home";
import Products from "../Component/Pages/Products/Products";
import Tools from "../Component/Pages/Tools/Tools";
import Tutorials from "../Component/Pages/Tutorials/Tutorials";
import CardDetails from "../Component/Pages/Common/Details/CardDetails";
import Carts from "../Component/Pages/Carts/Carts";
import DashBoard from "../Admin/Dashboard/DashBoard";
import Order from "../Admin/AdminDashboard/Order/Order";
import Addproduct from "../Admin/AdminDashboard/AddProduct/Addproduct";
import PaymentHistroy from "../Admin/AdminDashboard/PaymentHistroy/PaymentHistroy";
import Login from "../Component/Pages/Login/Login";
import Sigup from "../Component/Pages/Sigup/Sigup";
import PrivateRoute from "./PrivateRoute";



const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:'products',
                element:<Products/>,
            },
            {
                path:'tools',
                element:<Tools/>,
            },
            {
                path:'tutorials',
                element:<Tutorials/>, 
            },
            {
                path:`cardDetails/:id`,
                element:<CardDetails/>,
            },
            {
                path:'cart',
                element:<Carts/>
            },
            {
                path:'/login',
                element:<Login/>,
            },
            {
                path:'/sigup',
                element:<Sigup/>,
            },
           
        
            {
                path:'dashboard',
                element:<DashBoard/>,
                children:[
                    {
                        path:'/dashboard/order',
                        element:<Order/>
                    },
                    {
                        path:'/dashboard/addproduct',
                        element:<Addproduct/>,
                    },
                    {
                        path:'/dashboard/updateproduct',
                        element:<Addproduct/>,
                    },
                    {
                        path:'/dashboard/paymenthistroy',
                        element:<PaymentHistroy/>,
                    },
                 
                ]
            }
        ]
    },
])
export default router;