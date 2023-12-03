import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Error from "../Component/Pages/ErrorElement/Error";
import Products from "../Component/Pages/Products/Products";
import Home from "../Component/Pages/HomePage/Home/Home";
import Tutorials from "../Component/Pages/Tutorials/Tutorials";
import Tools from "../Component/Pages/Tools/Tools";
import CardDetails from "../Component/Pages/Common/Details/CardDetails";

const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'products',
                element:<Products/>
            },
            {
                path:'tools',
                element:<Tools/>
            },
            {
                path:'tutorials',
                element:<Tutorials/>  
            },
            {
                path:`cardDetails/:id`,
                element:<CardDetails/>
            }
        ]
    }
])
export default router;