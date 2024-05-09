import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebaseConfig";
import TeacherPage from "../TeacherPage/TeacherPage";

const LoginTeacher = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [teacherData, setTeacherData] = useState([]);
  const navigate = useNavigate();
  const teacherRef = collection(db, "userDetail");

  useEffect(() => {
    const getTeacherData = async () => {
      try {
        const data = await getDocs(teacherRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTeacherData(filteredData);
      } catch (error) {
        console.log("Error getting document:", error);
      }
    };
    getTeacherData();
  }, []);

  const loggedInUserEmail = teacherData.map((teacher) => teacher.email);
  // console.log(loggedInUserEmail);

  const handleSubmit = () => {
    const teacher = teacherData.find(
      (teacher) => teacher.email === email && teacher.password === password
    );
    if (teacher) {
      console.log("Teacher Found");
      navigate("/teacher-page");
    } else {
      console.log("Teacher Not Found");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto w-full ">
      <div className="flex justify-center items-center">
        <div className="bg-blue-400  mt-10 p-4 rounded-md">
          <div>
            <h2 className="text-2xl font-medium text-center py-3 my-4">
              Teacher Login
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 text-white items-center text-xl">
                {/* <label htmlFor="">Email</label> */}
                <input
                  type="email"
                  placeholder="Teacher Email"
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
      <div className="hidden">
        <TeacherPage teacherId={teacherData.id} teacherData={teacherData} />
      </div>
    </div>
  );
};

export default LoginTeacher;
