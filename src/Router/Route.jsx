import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Error from "../Component/Pages/ErrorElement/Error";
import Products from "../Component/Pages/Products/Products";
import Home from "../Component/Pages/HomePage/Home/Home";

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
            }
        ]
    }
])
export default router;