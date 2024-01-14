import React, { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import useCartData from "../../hooks/useCartData";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [carts] = useCartData();
  const len = carts?.length;
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
    <div className="flex flex-col lg:flex-row items-center justify-center font-semibold gap-5">
      <NavLink
        to="/"
        end // Added 'end' to ensure correct active state for the Home link
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
        Dashboard {/* Corrected the typo in "DashBoard" */}
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
          <NavLink to="/" onClick={handleLogOut} className="p-4 hover:text-red-500">
            Logout
          </NavLink>
        </>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "p-4 text-red-500" : "p-4 hover:text-red-500"
          }
        >
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
