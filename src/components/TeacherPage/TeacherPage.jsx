import React, { useState } from "react";
import LeftSidebar from "../LeftSidebar";
import Schedule from "../Schedule";
import Approve from "../Approve";
import Message from "../Message";

const TeacherPage = ({ teacherId, teacherData }) => {
  return (
    <div className="container mx-auto w-full h-full my-10 flex justify-center">
      <div className="flex justify-between items-center w-full sm:w-[700px] md:w-[900px] bg-blue-300 h-full mx-1">
        <div className="sm:w-[300px] w-[70px] z-10  h-[800px] bg-blue-500 rounded-l-md ">
          <LeftSidebar teacherData={teacherData} teacherId={teacherId} />
        </div>
        <div className="sm:w-3/4 w-full sm:mx-0 bg-blue-300 h-[800px] rounded-r-md flex items-center justify-center">
          {/* <ScheduleAppointment teacherId={teacherId} teacherData={teacherData} /> */}
          <Schedule />
          <Approve />
          <Message />
          {/* <EventCalendar /> */}
        </div>
      </div>
    </div>
  );
};

export default TeacherPage;
