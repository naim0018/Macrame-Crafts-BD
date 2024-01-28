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

import PaymentHistroy from "../Admin/AdminDashboard/PaymentHistroy/PaymentHistroy";
import Login from "../Component/Pages/Login/Login";
import SignUp from "../Component/Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import AllProduct from "../Admin/AdminDashboard/AllProduct/AllProduct";
import PendingOrder from "../Admin/AdminDashboard/PendingOrder/PendingOrder";
import Addproduct from "../Admin/AdminDashboard/AddProduct/Addproduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "tools",
        element: <Tools />,
      },
      {
        path: "tutorials",
        element: <Tutorials />,
      },
      {
        path: `cardDetails/:id`,
        element: <CardDetails />,
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Carts />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },

      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        ),
        children: [
          {
            index:true,
            element: <PendingOrder />,
          },
          {
            path:"pendingorder",
            element: <PendingOrder />,
          },
          {
            path:"allproduct",
            element: <AllProduct />,
          },
          {
            path: "addproduct",
            element: <Addproduct/>,
          },
          {
            path: "paymenthistroy",
            element: <PaymentHistroy />,
          },
        ],
      },
    ],
  },
]);
export default router;
