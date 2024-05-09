import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const AddTeacher = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");

  const adminRef = collection(db, "userDetail");

  // useEffect(() => {}, [])

  const onSubmit = async () => {
    try {
      if (
        firstName.trim() === "" ||
        lastName.trim() === "" ||
        department.trim() === "" ||
        subject.trim() === "" ||
        email.trim() === "" ||
        phoneNo.trim() === "" ||
        password.trim() === ""
      ) {
        console.log("Please fill in all fields");
        return; // Stop execution if any field is empty
      }

      await addDoc(adminRef, {
        firstName: firstName,
        lastName: lastName,
        department: department,
        email: email,
        phoneNo: phoneNo,
        password: password,
        subject: subject,
      });

      setFirstName("");
      setLastName("");
      setDepartment("");
      setSubject("");
      setEmail("");
      setPhoneNo("");
      setPassword("");
      console.log("Document added successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const hiddenChange = () => {
    const hidden = document.querySelector(".handleChange");
    hidden.classList.toggle("hidden");
  };

  return (
    <div className="p-4 w-full">
      <div className="bg-blue-300 rounded-md handleChange">
        <h2 className="text-2xl font-medium text-center py-3">Add Teacher</h2>
        <div className="p-10 grid gap-4 grid-cols-1 md:grid-cols-3 grid-rows-3 text-lg">
          <input
            className="bg-blue-100 text-sm text-blue-700 py-3 px-4 mb-3 leading-tight focus:outline-none rounded-md"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="bg-blue-100 text-sm text-blue-700 py-3 px-4 mb-3 leading-tight focus:outline-none rounded-md"
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => {
              console.log("Input value:", e.target.value);
              setLastName(e.target.value);
            }}
          />
          <input
            className="bg-blue-100 text-sm text-blue-700 py-3 px-4 mb-3 leading-tight focus:outline-none rounded-md"
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <input
            className="bg-blue-100 text-sm text-blue-700 py-3 px-4 mb-3 leading-tight focus:outline-none rounded-md"
            type="text"
            placeholder="Enter teacher's subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <input
            className="bg-blue-100 text-sm text-blue-700 py-3 px-4 mb-3 leading-tight focus:outline-none rounded-md"
            type="email"
            placeholder="teacher@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="bg-blue-100 text-sm text-blue-700 py-3 px-4 mb-3 leading-tight focus:outline-none rounded-md"
            type="tell"
            placeholder="Enter phone number"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <input
            className="bg-blue-100 text-sm text-blue-700 py-3 px-4 mb-3 leading-tight focus:outline-none rounded-md"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex gap-4 justify-end p-10">
          <button
            onClick={onSubmit}
            className="bg-blue-500 px-6 py-2 text-lg rounded-md"
          >
            Save
          </button>
          <button
            onClick={hiddenChange}
            className="bg-blue-400 px-6 py-2 text-lg rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
