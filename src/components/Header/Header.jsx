import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// const location = useLocation();

const Header = () => {
  // const currentPath = window.location.pathname;
  // const isActive = document.getElementById("admin-btn");

  // if (currentPath === "/") {
  //   isActive.classList.add("block");
  // } else {
  //   isActive.classList.add("hidden");
  // }

  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;
    setIsActive(currentPath === "/");
  }, [location.pathname]);

  return (
    <div className=" w-full h-16 flex justify-between items-center ">
      <div className="flex items-center  container mx-auto justify-between w-full h-16">
        <h2 className="text-3xl font-medium shadow-md p-2 rounded-md text-slate-900">
          Edu<span className="text-blue-500">Connect</span>
        </h2>
        <div
          className={`bg-[#62CDFF] px-3 py-1 rounded-md hidden sm:block shadow-md ${
            isActive ? "block" : "hidden"
          }`}
        >
          {isActive && (
            <Link to="/admin" className="text-white font-light text-sm">
              Admin
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
