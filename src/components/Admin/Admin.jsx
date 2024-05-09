import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [adminData, setAdminData] = useState([]);

  const adminRef = collection(db, "Admin");

  useEffect(() => {
    const getAdminData = async () => {
      try {
        const data = await getDocs(adminRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setAdminData(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    getAdminData();
  }, []);

  const handleSubmit = () => {
    const admin = adminData.find(
      (admin) => admin.username === username && admin.password === password
    );
    if (admin) {
      console.log("Admin Found");
      navigate("/admin-dashboard");
    } else {
      console.log("Admin Not Found");
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-full my-10">
      <div className="bg-[#DAF5FF] rounded-md p-4 shadow-lg border-2 border-blue-600">
        <h2 className="text-center text-lg my-3 text-blue-400 font-normal">
          Admin Login
        </h2>
        <div className="flex flex-col justify-center w-full">
          <div>
            <div className="my-2">
              {/* <label className="text-blue-400 text-sm px-2" htmlFor="">
                Username:
              </label> */}
              <input
                className="text-sm rounded-md focus:outline-none p-1 w-[200px] text-blue-400"
                type="text"
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="my-2">
              {/* <label className="text-blue-400 text-sm px-2" htmlFor="">
                Password
              </label> */}
              <input
                className="text-sm  rounded-md focus:outline-none p-1 w-[200px] text-blue-400"
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-evenly my-3 ">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 py-2 px-4 rounded-md text-white"
            >
              Submit
            </button>
            <button
              onClick={handleHome}
              className="bg-blue-500 py-2 px-4 rounded-md text-white"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
