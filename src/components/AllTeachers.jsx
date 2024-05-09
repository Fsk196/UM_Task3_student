import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";

const AllTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const teacherRef = collection(db, "userDetail");

  useEffect(() => {
    const getTeacherData = async () => {
      try {
        const data = await getDocs(teacherRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTeachers(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    getTeacherData();
  }, []);

  const handleViewClick = (teacher) => {
    setShowPopup(true);
    setSelectedTeacher(teacher);
  };

  const handleCloseClick = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex justify-evenly flex-wrap gap-x-2 gap-y-4">
      {teachers.map((teacher, index) => (
        <div
          key={index}
          className="bg-blue-300 w-[350px] h-fit rounded-lg p-4 shadow-md"
        >
          <h2 className="text-white text-lg">
            <span className="text-blue-900 font-semibold">Name:</span>{" "}
            {teacher.firstName} {teacher.lastName}{" "}
          </h2>
          <p className="text-white text-lg">
            <span className="text-blue-900 font-semibold">Department:</span>{" "}
            {teacher.department}
          </p>
          <p className="text-white text-lg">
            <span className="text-blue-900 font-semibold">Subject:</span>{" "}
            {teacher.subject}
          </p>
          <div className="flex justify-between my-2">
            <button
              onClick={() => handleViewClick(teacher)}
              className="bg-blue-600 px-3 py-1 rounded text-white hover:bg-blue-700"
            >
              View
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white">
              Message
            </button>
          </div>
        </div>
      ))}

      {showPopup && selectedTeacher && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-blue-300 p-4 rounded-lg text-white">
            <h2 className="text-xl text-center font-semibold mb-2 text-blue-600">
              Teacher Details
            </h2>
            <div className="flex flex-col gap-2">
              <p>
                <strong className="text-blue-600">Name:</strong>{" "}
                {selectedTeacher.firstName} {selectedTeacher.lastName}
              </p>
              <p>
                <strong className="text-blue-600">Department:</strong>{" "}
                {selectedTeacher.department}
              </p>
              <p>
                <strong className="text-blue-600">Subject:</strong>{" "}
                {selectedTeacher.subject}
              </p>
              <p>
                <strong className="text-blue-600">Email:</strong>{" "}
                {selectedTeacher.email}
              </p>
              <p>
                <strong className="text-blue-600">Phone No:</strong>{" "}
                {selectedTeacher.phoneNo}
              </p>
            </div>

            <div className="my-2 flex justify-end">
              <button
                className=" px-3 py-1 text-white bg-blue-400 rounded-md hover:bg-blue-500"
                onClick={() => setShowPopup(false)} // Close the pop-up when close button is clicked
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTeachers;
