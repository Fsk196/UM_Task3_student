import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const StudRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [classN, setClassN] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const studReg = collection(db, "pendingRegistrationRef");

  useEffect(() => {}, [])

  const onSubmit = async () => {
    try {
      if (
        firstName.trim() === "" ||
        lastName.trim() === "" ||
        classN.trim() === "" ||
        gender.trim() === "" ||
        email.trim() === "" ||
        phoneNo.trim() === "" ||
        password.trim() === ""
      ) {
        console.log("Please fill in all fields");
        return; // Stop execution if any field is empty
      }

      await addDoc(studReg, {
        firstName: firstName,
        lastName: lastName,
        classN: classN,
        gender: gender,
        email: email,
        phoneNo: phoneNo,
        password: password,
      });

      setFirstName("");
      setLastName("");
      setClassN("");
      setGender("");
      setEmail("");
      setPhoneNo("");
      setPassword("");
      console.log("Document added successfully!");

      navigate("/student-page");
    } catch (error) {
      console.log(error);
    }
  };

  const onBack = () => {
    navigate("/");
  };

  return (
    <div className="p-4 w-full flex justify-center">
      <div className="bg-blue-300  rounded-md handleChange shadow-lg">
        <h2 className="text-2xl text-white font-medium text-center py-3">
          Register As a Student
        </h2>
        <div className="flex justify-center">
          <div className="p-10 grid gap-4 grid-cols-1 md:grid-cols-3 grid-rows-3 text-lg">
            <input
              className="bg-blue-100 text-sm w-[200px] text-blue-700 py-3 px-4 mb-3 leading-tight focus:outline-none rounded-md"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="bg-blue-100 text-sm w-[200px] text-blue-700 py-3 px-4 mb-3 leading-tight focus:outline-none rounded-md"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                console.log("Input value:", e.target.value);
                setLastName(e.target.value);
              }}
            />
            <div className="bg-blue-100 text-sm w-[200px] text-blue-700 py-3 px-4 mb-3 leading-tight focus:outline-none rounded-md flex">
              <label htmlFor="" className="mx-2">
                Gender
              </label>
              <select
                className="w-full rounded-sm bg-blue-400/50 text-white focus:outline-none"
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Select">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <input
              className="bg-blue-100 text-sm w-[200px] text-blue-700 py-3 px-4 mb-3 leading-tight focus:outline-none rounded-md"
              type="text"
              placeholder="Class"
              value={classN}
              onChange={(e) => setClassN(e.target.value)}
            />
            <input
              className="bg-blue-100 text-sm w-[200px] text-blue-700 py-3 px-4 mb-3 leading-tight focus:outline-none rounded-md"
              type="email"
              placeholder="student@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-blue-100 text-sm w-[200px] text-blue-700 py-3 px-4 mb-3 leading-tight focus:outline-none rounded-md"
              type="tell"
              placeholder="Phone number"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
            <input
              className="bg-blue-100 text-sm w-[200px] text-blue-700 py-3 px-4 mb-3 leading-tight focus:outline-none rounded-md"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-evenly mb-10">
          <button
            onClick={onSubmit}
            className="bg-blue-500 px-6 py-2 text-white text-lg rounded-md"
          >
            Register
          </button>
          <button
            onClick={onBack}
            className="bg-blue-500 px-6 py-2 text-white text-lg rounded-md"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudRegister;
