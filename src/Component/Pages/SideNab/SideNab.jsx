import React from "react";
import {NavLink, Outlet } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import { BiSolidCartAdd } from "react-icons/bi";
import { IoBagAddSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";

const SideNab = () => {
  return (
    <div className="container mx-auto flex">
      {/* Dashborad Side Bar */}
      <div className="w-64 min-h-full bg-yellow-400">
        <ul className="menu p-4">
          <li className="text-2xl">
            Admin Panel
          </li>
          <li className="my-5 ">
            <NavLink className="text-2xl" to='/dashboard/addproduct'> 
            <IoBagAddSharp />
             Add Product
            </NavLink>
          </li>
          <li >
            <NavLink className="text-2xl" to='/dashboard/order'> 
            <BiSolidCartAdd />
             Order
            </NavLink>
          </li>
          <li >
            <NavLink className="text-2xl" to='/dashboard/paymenthistroy'> 
            <MdPayment />
             Payment Histroy 
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard Content Side  */}
      <div className="flex-1 mt-20 ml-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default SideNab;
