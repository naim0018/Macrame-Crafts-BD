import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import useCartData from "../../hooks/useCartData";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [len, setLen] = useState(0);
  const { user, logOut } = useContext(AuthContext);
  const [admin,setAdmin] = useState();
  const navigate = useNavigate();

  const { data } = useCartData();
  const userCarts = data?.filter(item=> item?.email === user?.email)
  
  useEffect(() => {
    if(user?.email === "mdkazinaim0018@gmail.com" || user?.email === "azizulislam74@gmail.com"){
      setAdmin(true)
    }else{
      setAdmin(false)
    }
    if(user && userCarts.length ){
      setLen(userCarts?.length);
    }else{
      setLen("+0")
    }
  }, [data,user]);


  const handelLogout = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      console.error(error.message);
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
        {admin && (
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
        <div className="rounded-full">
        {
          user?.photoURL ?  
          <img alt={user?.displayName} src={user?.photoURL} className=""/> : <FaUserCircle className="text-4xl text-center"/>
        }

        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] space-y-2 shadow bg-base-100 rounded-box  border border-black">
        <li>
          {
            user?.displayName ?
            <p className="">{user?.displayName}</p> :
            <p>{user?.email}</p>
          }
        </li>
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
