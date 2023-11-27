import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Component/Pages/Home/Home";
import Error from "../Component/Pages/ErrorElement/Error";
import Products from "../Component/Pages/Products/Products";

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