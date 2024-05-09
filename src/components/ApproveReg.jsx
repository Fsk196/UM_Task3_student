import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";

const ApproveReg = () => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const pendingRegistrationRef = collection(db, "pendingRegistrationRef");
  const studentRegister = collection(db, "studentRegister");

  useEffect(() => {
    const fetchPendingRequests = async () => {
      try {
        const querySnapshot = await getDocs(pendingRegistrationRef);
        const requests = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPendingRequests(requests);
      } catch (error) {
        console.log("Error fetching pending requests: ", error);
      }
    };
    fetchPendingRequests();
  }, [pendingRegistrationRef, studentRegister]);

  const handleApprove = async (id) => {
    try {
      const requestDoc = await getDoc(doc(pendingRegistrationRef, id));
      if (requestDoc.exists()) {
        // Moving request to studentRegister collection
        await setDoc(doc(studentRegister, id), requestDoc.data());
        // Deleting request from pendingRegistration collection
        await deleteDoc(doc(pendingRegistrationRef, id));
        console.log("Registration request approved successfully");
      }
    } catch (error) {
      console.log("Error approving request: ", error);
    }
  };

  const handleReject = async (id) => {
    try {
      // Deleting the request from pendingRegistration collection;
      await deleteDoc(doc(pendingRegistrationRef, id));
      console.log("Registration request rejected successfully");
    } catch (error) {
      console.log("Error rejecting registration request: ", error);
    }
  };

  return (
    <div>
      <div>
        <div className="">
          <h2 className="text-white text-xl font-normal text-center handleChange">
            Pending Registration Requests
          </h2>
          {pendingRequests.length === 0 ? (
            <h2 className="text-red-500 text-lg my-6 font-normal text-center">
              No Pending Requests available
            </h2>
          ) : (
            <ul>
              {pendingRequests.map((request) => (
                <li
                  className="my-4 rounded-md bg-[#E0F4FF] flex justify-between shadow-md py-2 px-4 mx-4 gap-2"
                  key={request.id}
                >
                  {/* <h2 className="flex items-center md:flex-row flex-wrap gap-4">
                    <span className="text-blue-500 text-lg">
                      {request.firstName} {request.lastName}
                    </span>
                    <span className="text-blue-500">{request.email}</span>
                    <span className="text-blue-500">{request.classN}</span>
                  </h2> */}

                  <table className="flex items-center text-blue-500">
                    <tr className="flex items-center md:flex-row flex-wrap gap-3 sm:gap-4">
                      <td>
                        {request.firstName} {request.lastName}
                      </td>
                      <td>{request.email}</td>
                      <td>{request.classN}</td>
                    </tr>
                  </table>
                  <div className="flex flex-wrap gap-4 ">
                    <button
                      className="text-white shadow-md bg-blue-700 px-4 py-2  rounded-md"
                      onClick={() => handleApprove(request.id)}
                    >
                      Approve
                    </button>
                    <button
                      className="text-white shadow-md bg-blue-500 px-4 py-2  rounded-md"
                      onClick={() => handleReject(request.id)}
                    >
                      Reject
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApproveReg;
