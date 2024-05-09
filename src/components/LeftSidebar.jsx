import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

const LeftSidebar = ({ teacherData }) => {
  const navigate = useNavigate();
  // const [teacherData, setTeacherData] = useState([]);

  // const teacherRef = collection(db, "userDetail");

  // useEffect(() => {
  //   const getTeacherData = async () => {
  //     try {
  //       const data = await getDocs(teacherRef);
  //       const filteredData = data.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));
  //       setTeacherData(filteredData);
  //     } catch (error) {
  //       console.log("Error getting document:", error);
  //     }
  //   };
  //   getTeacherData();
  // }, []);

  const handleSchedule = () => {
    document.querySelector(".schedule").classList.toggle("hidden");
    document.querySelector(".approve").classList.add("hidden");
    document.querySelector(".message").classList.add("hidden");
  };

  const handleApprove = () => {
    document.querySelector(".approve").classList.remove("hidden");
    document.querySelector(".schedule").classList.add("hidden");
    document.querySelector(".message").classList.add("hidden");
  };

  const handleMessage = () => {
    document.querySelector(".message").classList.remove("hidden");
    document.querySelector(".approve").classList.add("hidden");
    document.querySelector(".schedule").classList.add("hidden");
  };

  const signout = () => {
    navigate("/");
  };

  return (
    <div className="px-5 py-10 flex justify-center flex-col ">
      <h2 className="text-xl font-medium hidden sm:block text-white">
        Teacher Dashboard
      </h2>

      <div className="my-4 flex items-center gap-3 border-b-2 py-2">
        <img src="src/assets/profile.png" alt="logo" width={50} height={50} />
        <h2 className="text-2xl font-medium text-white hidden sm:block">
          Name
        </h2>
      </div>

      <div className="flex flex-col mt-10 items-start gap-4">
        <button
          onClick={handleSchedule}
          className="text-sm flex items-center rounded-md hover:bg-blue-400 text-white bg-blue-300 px-2 py-1 gap-2"
        >
          <span className="text-blue-700 text-lg">
            <i className="fa-regular fa-calendar"></i>
          </span>
          <span className="hidden sm:block">Schedule Appointment</span>
        </button>
        <button
          onClick={handleApprove}
          className="text-sm flex items-center rounded-md hover:bg-blue-400 text-white bg-blue-300 px-2 py-1 gap-2"
        >
          <span className="text-blue-700 text-lg">
            <i className="fa-solid fa-person-circle-check"></i>
          </span>
          <span className="hidden sm:block">Approve/Cancel</span>
        </button>
        <button
          onClick={handleMessage}
          className="text-sm flex items-center rounded-md hover:bg-blue-400 text-white bg-blue-300 px-2 py-1 gap-2"
        >
          <span className="text-blue-700 text-lg">
            <i className="fa-regular fa-envelope"></i>
          </span>
          <span className="hidden sm:block">Messages</span>
        </button>
      </div>

      <div className="mt-10">
        <button
          className="bg-blue-300 hover:bg-blue-400 font-medium rounded px-2 py-1 flex items-center gap-2 text-white text-sm"
          onClick={signout}
        >
          <span className="text-blue-700">
            <i className="fa-solid fa-right-from-bracket"></i>
          </span>
          <span className="hidden sm:block">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
