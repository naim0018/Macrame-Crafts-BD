import { NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import useCartData from "../../hooks/useCartData";


const Navbar = () => {
  const [len, setLen] = useState()
  const { user, logOut } = useContext(AuthContext);

  const { data: carts } = useCartData()
  useEffect(() => {
    setLen(carts?.length);
  }, [carts])

  const handlelogout = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.log(error));
    const { isLoggedIn } = this.state;

  };

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center font-semibold gap-5 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "p-4 text-red-500" : "p-4 hover:text-red-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "p-4 text-red-500" : "p-4 hover:text-red-500"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/tools"
          className={({ isActive }) =>
            isActive ? "p-4 text-red-500" : "p-4 hover:text-red-500"
          }
        >
          Tools
        </NavLink>
        <NavLink
          to="/tutorials"
          className={({ isActive }) =>
            isActive ? "p-4 text-red-500" : "p-4 hover:text-red-500"
          }
        >
          Tutorials
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "p-4 text-red-500" : "p-4 hover:text-red-500"
          }
        >
          DashBoard
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? " text-red-500" : " hover:text-red-500"
          }
        >
          <button className="btn hover:bg-yellow-200 bg-transparent border-none">
            <FaShoppingBag />
            <div className="badge badge-secondary flex flex-row">{len}</div>
          </button>
        </NavLink>
        {user ? (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "p-4 text-red-500" : "p-4 hover:text-red-500"
              }
            >
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "p-4 text-red-500" : "p-4 hover:text-red-500"
              }
            >
              Login
            </NavLink>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
