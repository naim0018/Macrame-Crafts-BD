import React from "react";
import {NavLink, Outlet } from "react-router-dom";
import { BiSolidCartAdd } from "react-icons/bi";
import { IoBagAddSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";

const SideNab = () => {
  return (
    <div className="container mx-auto md:flex min-h-screen">
      {/* Dashborad Side Bar */}
      <div className=" min-h-full bg-yellow-400">
        <ul className="menu p-4 space-y-4">
          <li className="text-2xl text-center">
            Admin Panel
          </li>
          <li >
          <NavLink className="text-2xl" to='/dashboard/pendingorder'> 
            <IoBagAddSharp />
             Pending Order
            </NavLink>
          </li>
          <li >
          <NavLink className="text-2xl" to='/dashboard/allproduct'> 
            <IoBagAddSharp />
             All Product
            </NavLink>
          </li>
          <li className="">
            <NavLink className="text-2xl" to='/dashboard/addproduct'> 
            <IoBagAddSharp />
             Add Product
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
      <div className="flex-1 mt-20 md:ml-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default SideNab;
