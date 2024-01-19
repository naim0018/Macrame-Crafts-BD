import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="overflow-x-hidden">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="relative">
          <div className="w-full  navbar bg-yellow-300 sticky top-0 z-20 ">
          {/*Small Navbar */}
            <div className="w-full flex justify-between lg:hidden ">
              <div className="">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className=" px-2 mx-2 w-fit gap-2 flex items-center">
              <p className="text-xl font-bold text-zinc-600"><span className="text-red-500">M</span>acrame<span className="text-red-500">C</span>rafts</p>
                <Link to='/'>
                <img
                  className="border rounded-full w-16"
                  src="https://i.ibb.co/YpDz3JN/macrime-logo.png"
                  alt=""
                />
                
                </Link>
              </div>
            </div>
          {/* Large Navbar */}
            <div className="container mx-auto hidden lg:flex justify-between">
              <div className=" px-2 mx-2  w-fit ">
                <Link to='/' className="flex items-center flex-row-reverse gap-2">
                <p className="text-xl font-bold text-zinc-600"><span className="text-red-500">M</span>acrame<span className="text-red-500">C</span>rafts</p>
                <img
                  className="border rounded-full w-16 cursor-pointer"
                  src="https://i.ibb.co/YpDz3JN/macrime-logo.png"
                  alt=""
                />
                </Link>
              </div>

              {/* Navbar */}
              <div className="flex-none hidden lg:block">
                {/* Navbar menu content here */}
                <Navbar />
              </div>
            </div>
          </div>
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side z-20">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className=" p-4 w-80 min-h-full bg-base-200 lg:hidden ">
            {/* Sidebar content here */}
            <Navbar />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
