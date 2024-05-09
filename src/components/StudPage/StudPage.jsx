import React from "react";
import AllTeachers from "../AllTeachers";

const StudPage = () => {
  return (
    <div className="container mx-auto w-full flex justify-center items-center">
      <div className="bg-blue-500 w-4/5 h-fit rounded-md shadow-lg p-4">
        <div className="w-full h-24 sm:h-14 bg-blue-300 rounded-sm my-4 flex justify-center flex-col sm:flex-row text-lg md:text-xl gap-4 p-2">
          <button className="bg-blue-500 sm:px-3 py-1 sm:py-0  rounded-md shadow-md text-base sm:text-lg text-white hover:bg-blue-600">
            All Teachers
          </button>
          <button className="bg-blue-500 sm:px-3 py-1 sm:py-0 rounded-md shadow-md text-base sm:text-lg text-white hover:bg-blue-600">
            Send Messages
          </button>
        </div>
        <div className="w-full h-fit">
          <AllTeachers />
        </div>
      </div>
    </div>
  );
};

export default StudPage;
