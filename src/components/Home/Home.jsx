import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;
    setIsActive(currentPath === "/");
  }, [location.pathname]);

  return (
    <div className="flex justify-center items-center h-full my-10">
      <div className="bg-[#62CDFF] rounded-md p-4 shadow-lg">
        <h2 className="text-center text-lg my-4 text-white font-medium">
          Login to Continue
        </h2>
        <div className="flex justify-center">
          <ul className=" flex flex-col justify-center">
            <li className="my-2">
              <Link to="login-teacher">
                <button className="bg-white py-2 px-4 text-sm text-[#62CDFF] rounded-md">
                  Login as a Teacher
                </button>
              </Link>
            </li>
            <li className="my-2">
              <Link to="login-student">
                <button className="bg-white py-2 px-4 text-sm text-[#62CDFF] rounded-md">
                  Login as a Student
                </button>
              </Link>
            </li>
            <li className="my-2">
              <h2 className="text-sm text-white my-2">
                Don't have an account?
              </h2>
              <Link to="register-student">
                <button className="bg-white py-2 px-4 text-sm text-[#62CDFF] rounded-md">
                  Register as Student
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center mt-3">
          <div
            className={`bg-[#62CDFF] px-3 py-1 rounded-md sm:hidden block shadow-md ${
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
    </div>
  );
};

export default Home;
