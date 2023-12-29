import { NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
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
            isActive
              ? "p-4 text-red-500"
              :" hover:text-red-500"
          }
        >
          <button class="btn hover:bg-yellow-200 bg-transparent border-none">
           <FaShoppingBag />
            <div class="badge badge-secondary flex flex-row">+0</div>
          </button>
          
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
