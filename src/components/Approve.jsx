import React from "react";

const Approve = () => {
  return (
    <div className="flex justify-center items-center flex-col approve hidden">
      <h1 className="text-xl text-white my-10">Approve or Cancel</h1>
      <div>
        <div className=" flex flex-wrap justify-center items-center gap-4">
          <div className="w-52 h-36 rounded-lg border-2 border-white flex flex-col items-center justify-center">
            <h1 className="text-xl font-semibold text-blue-700">Name</h1>
            <p className="text-lg text-white">Schedule</p>
            <div className="flex my-3 gap-4 mx-auto">
              <button className="bg-green-500 px-2 py-1 rounded-sm text-white">
                Approve
              </button>
              <button className="bg-red-500 px-2 py-1 rounded-sm text-white">
                Cancel
              </button>
            </div>
          </div>
          <div className="w-52 h-36 rounded-lg border-2 border-white flex flex-col items-center justify-center">
            <h1 className="text-xl font-semibold text-blue-700">Name</h1>
            <p className="text-lg text-white">Schedule</p>
            <div className="flex my-3 gap-4 mx-auto">
              <button className="bg-green-500 px-2 py-1 rounded-sm text-white">
                Approve
              </button>
              <button className="bg-red-500 px-2 py-1 rounded-sm text-white">
                Cancel
              </button>
            </div>
          </div>
          <div className="w-52 h-36 rounded-lg border-2 border-white flex flex-col items-center justify-center">
            <h1 className="text-xl font-semibold text-blue-700">Name</h1>
            <p className="text-lg text-white">Schedule</p>
            <div className="flex my-3 gap-4 mx-auto">
              <button className="bg-green-500 px-2 py-1 rounded-sm text-white">
                Approve
              </button>
              <button className="bg-red-500 px-2 py-1 rounded-sm text-white">
                Cancel
              </button>
            </div>
          </div>
          <div className="w-52 h-36 rounded-lg border-2 border-white flex flex-col items-center justify-center">
            <h1 className="text-xl font-semibold text-blue-700">Name</h1>
            <p className="text-lg text-white">Schedule</p>
            <div className="flex my-3 gap-4 mx-auto">
              <button className="bg-green-500 px-2 py-1 rounded-sm text-white">
                Approve
              </button>
              <button className="bg-red-500 px-2 py-1 rounded-sm text-white">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approve;
