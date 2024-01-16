import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import useCartData from "../../hooks/useCartData";

const Navbar = () => {
  const [len, setLen] = useState(0);
  const { user, logOut } = useContext(AuthContext);

  const { data: carts } = useCartData();
  useEffect(() => {
    if(user){
      setLen(carts?.length);
    }else{
      setLen("+0")
    }
  }, [carts]);

  const handelLogout = () => {
    logOut()
      .then(() => {})
      .catch(error);
    const { isLoggedIn } = this.state;
  };
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
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
        {user && (
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "p-4 text-red-500" : "p-4 hover:text-red-500"
            }
          >
            DashBoard
          </NavLink>
        )}
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
        {  <div className="dropdown dropdown-end space-y-2">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="{user}" src="{user}" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52 border border-black">
        <li>
          <a className="">
            Profile
            <span className="badge">{len}</span>
          </a>
        </li>
        <li className="">
        {
          user ? 
          <NavLink onClick={handelLogout} >LogOut</NavLink>
          :
        <NavLink to='/logIn'>LogIn</NavLink>
        }
        </li>
      </ul>
    </div>
        }
      </div>
    </>
  );
};

export default Navbar;
