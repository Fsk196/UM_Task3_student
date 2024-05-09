import React, { useState } from "react";
import AddTeacher from "../AddTeacher";
import ApproveReg from "../ApproveReg";

const AdminPage = () => {
  const [showAddTeacher, setShowAddTeacher] = useState(false);
  const [showApproveReg, setShowApproveReg] = useState(false);

  const handleAddTeacher = () => {
    setShowAddTeacher(true);
    setShowApproveReg(false); // Hide ApproveReg component
  };

  const handleRegistration = () => {
    setShowAddTeacher(false); // Hide AddTeacher component
    setShowApproveReg(true);
  };

  const logout = () => {
    localStorage.removeItem("admin");
    window.location.href = "/admin";
  };

  return (
    <div className="container mx-auto w-full">
      <div className="flex justify-center items-center min-h-full w-full">
        <div className="w-full h-full">
          <h2 className="text-center text-blue-400 my-4  text-3xl font-medium">
            Welcome to the Admin dashboard
          </h2>
          <div className="flex flex-col md:flex-row text-white h-full justify-center">
            <div className="bg-blue-500 w-full  md:w-72 sm:py-10 rounded-l">
              <h2 className="text-center text-xl my-2">Admin Dashboard</h2>
              <ul className="sm:p-4 py-0 px-4 flex justify-center sm:block gap-3 sm:gap-0">
                <li className="my-4">
                  <button
                    className="border-2 border-blue-400 px-2 rounded-md py-1 hover:text-white hover:bg-blue-400"
                    onClick={handleAddTeacher}
                  >
                    Add Teacher
                  </button>
                </li>
                <li className="my-4">
                  <button
                    className="border-2 border-blue-400 px-2 rounded-md py-1 hover:text-white hover:bg-blue-400"
                    onClick={handleRegistration}
                  >
                    Approve Registration
                  </button>
                </li>
              </ul>
              <div className="flex justify-center">
                <button
                  onClick={logout}
                  className="bg-blue-400 px-4 py-2 my-4 rounded-md hover:bg-blue-600"
                >
                  Logout
                </button>
              </div>
            </div>

            <div className="bg-blue-400  py-10 rounded-r">
              {showAddTeacher && <AddTeacher />}
              {showApproveReg && <ApproveReg />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
