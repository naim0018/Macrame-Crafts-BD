import { NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
   
    return (

   <>
   <div className="flex flex-col lg:flex-row items-center justify-center font-semibold gap-5 ">
     <NavLink to='/'
     className={({isActive})=> isActive ? "p-4 text-red-500" : "p-4 hover:text-red-500"}>Home</NavLink>
     <NavLink to='/products'
     className={({isActive})=> isActive ? "p-4 text-red-500" : "p-4 hover:text-red-500"}>Products</NavLink>
     <NavLink to='/tools'
     className={({isActive})=> isActive ? "p-4 text-red-500" : "p-4 hover:text-red-500"}>Tools</NavLink>
     <NavLink to='/tutorials'
<<<<<<< HEAD
     className={({isActive})=> isActive ? "p-4 text-red-500" : "p-4 hover:text-red-500"}>Tutorials</NavLink>
   
=======
     className={({isActive})=> isActive ? "p-4 text-red-500 " : "p-4  hover:text-red-500 "}>Tutorials</NavLink>
     <NavLink to='/dashboard'
     className={({isActive})=> isActive ? "p-4 text-red-500" : "p-4 hover:text-red-500"}>DashBoard</NavLink>
    <NavLink to ='/cart' className={({isActive})=> isActive ? 'p-4 text-red-500 border rounded-full border-red-500 ': 'p-4 text-lg border rounded-full border-black hover:border-red-500 hover:text-red-500'}>
    <FaShoppingBag />
    </NavLink>
>>>>>>> eb42054fbf70810df3766f068adf2dfca1c1c542
   </div>
   </>

   
    )
};

export default Navbar;