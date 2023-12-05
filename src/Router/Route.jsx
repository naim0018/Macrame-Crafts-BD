import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Error from "../Component/Pages/ErrorElement/Error";
import Products from "../Component/Pages/Products/Products";
import Home from "../Component/Pages/HomePage/Home/Home";
import Tutorials from "../Component/Pages/Tutorials/Tutorials";
import Tools from "../Component/Pages/Tools/Tools";
import CardDetails from "../Component/Pages/Common/Details/CardDetails";
import DashBoard from "../Component/Dashboard/DashBoard";
import Order from "../Component/Pages/AdminDashboard/Order/Order";
import Addproduct from "../Component/Pages/AdminDashboard/AddProduct/Addproduct";
import PaymentHistroy from "../Component/Pages/AdminDashboard/PaymentHistroy/PaymentHistroy";

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
        
        ]
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
                path:'/dashboard/paymenthistroy',
                element:<PaymentHistroy/>,
            },
        ]
    }
])
export default router;