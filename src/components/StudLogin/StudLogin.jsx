import { collection, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const StudLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [studentData, setStudentData] = useState([]);

  const studentRef = collection(db, "studentRegister");

  const getStudentData = async () => {
    try {
      const data = await getDocs(studentRef);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setStudentData(filterData);
    } catch (error) {
      console.log(error);
    }
  };
  getStudentData();

  const handleSubmit = () => {
    const student = studentData.find(
      (student) => student.email === email && student.password === password
    );

    if (student) {
      console.log("Student Found");
      navigate("/student-page");
    } else {
      console.log("Student Not Found");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="container mx-auto w-full ">
        <div className="flex justify-center items-center">
          <div className="bg-blue-400  mt-10 p-4 rounded-md">
            <div>
              <h2 className="text-2xl font-medium text-center py-3 my-4">
                Student Login
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 text-white items-center text-xl">
                  {/* <label htmlFor="">Email</label> */}
                  <input
                    type="email"
                    placeholder="Student's Email"
                    className="px-2 py-1 text-blue-500 focus:outline-none rounded"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex gap-3 text-white items-center text-xl">
                  {/* <label htmlFor="">Password</label> */}
                  <input
                    type="password"
                    placeholder="Password"
                    className="px-2 py-1 text-blue-500 focus:outline-none rounded"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex justify-evenly">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-blue-500 px-3 py-2 rounded text-xl font-semibold text-white hover:bg-blue-600"
                  >
                    Login
                  </button>
                  <button
                    type="submit"
                    onClick={handleBack}
                    className="bg-blue-500 px-3 py-2 rounded text-xl font-semibold text-white hover:bg-blue-600"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudLogin;
