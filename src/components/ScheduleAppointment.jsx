// import React, { useEffect, useState } from "react";
// import {
//   Day,
//   Inject,
//   Month,
//   ScheduleComponent,
//   ViewDirective,
//   ViewsDirective,
//   Week,
// } from "@syncfusion/ej2-react-schedule";

// import { addDoc, collection, getDocs } from "firebase/firestore";
// import { db } from "../firebaseConfig";

// import { registerLicense } from "@syncfusion/ej2-base";

// registerLicense(
//   "Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhKYVB3WmFZfVpgfV9GYFZSRGYuP1ZhSXxXdkZjWH9XcHRWR2RZV00="
// );

// const ScheduleAppointment = ({ teacherId }) => {
//   const [events, setEvents] = useState([]);

//   const handleEventChange = async (args) => {
//     const newEventRef = await addDoc(
//       collection(db, "userDetail", teacherId, "events"),
//       {
//         Subject: args.Subject,
//         StartTime: args.StartTime,
//         EndTime: args.EndTime,
//         IsAllDay: args.IsAllDay,
//       }
//     );
//     console.log("Event added with ID: ", newEventRef.id);
//   };

//   useEffect(() => {
//     const fetchEvents = async () => {
//       const teacherRef = collection(db, "userDetail", teacherId);
//       const eventCollectionRef = collection(teacherRef, "events");

//       const eventSnapshot = await getDocs(eventCollectionRef);
//       const eventData = eventSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         Subject: doc.data().Subject,
//         StartTime: doc.data().StartTime.toDate(),
//         EndTime: doc.data().EndTime.toDate(),
//         IsAllDay: doc.data().IsAllDay,
//       }));
//       setEvents(eventData);
//     };

//     fetchEvents();
//   }, [teacherId]);

//   return (
//     <div className="flex flex-col justify-center items-center gap-2 w-full h-[800px]">
//       <h2 className="text-2xl font-medium text-white text-center">
//         Schedule Appointment
//       </h2>
//       <div className="mt-0">
//         <ScheduleComponent
//           className="rounded-md"
//           width={900}
//           height={600}
//           eventSettings={{ dataSource: events }}
//           selectedDate={new Date()}
//           currentView="Month"
//           eventRendered={handleEventChange}
//         >
//           <ViewsDirective>
//             <ViewDirective option="Day" />
//             <ViewDirective option="Week" />
//             <ViewDirective option="Month" />
//           </ViewsDirective>

//           <Inject services={[Day, Week, Month]} />
//         </ScheduleComponent>
//       </div>
//     </div>
//   );
// };

// export default ScheduleAppointment;
