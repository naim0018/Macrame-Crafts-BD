import { NavLink } from "react-router-dom";

const Navbar = () => {
   
    return (

   <>
   <div className="flex items-center justify-center font-semibold gap-5 border ">
     <NavLink className="p-4  text-red-500">Home</NavLink>
    <NavLink>Products</NavLink>
    <NavLink>Tools</NavLink>
    <NavLink>Tutorial</NavLink>
   </div>
   </>

   
    )
};

export default Navbar;