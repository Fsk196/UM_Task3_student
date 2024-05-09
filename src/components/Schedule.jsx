import React, { useEffect, useState } from "react";
import {
  Day,
  Inject,
  Month,
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  Week,
} from "@syncfusion/ej2-react-schedule";

registerLicense(
    "Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCe0x3TXxbf1x0ZFdMYVlbRX9PIiBoS35RckVnWHdfdHVSQ2FaUkZz"
  );
import {
  addDoc,
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

import { registerLicense } from "@syncfusion/ej2-base";



const Schedule = () => {
  const [events, setEvents] = useState([]);

  const handleEventChange = async (args) => {
    try {
      console.log("Event data:", args);

      if (
        args.Subject === undefined ||
        args.StartTime === undefined ||
        args.EndTime === undefined ||
        args.IsAllDay === undefined || // Check for undefined specifically
        args.Location === undefined || // Check for undefined specifically
        args.Description === undefined // Check for undefined specifically
      ) {
        throw new Error("Invalid event data");
      }

      if (args.id) {
        await updateEvent(args);
      } else {
        // If the event does not have an ID, it means it's a new event and needs to be added to the database
        await addEvent(args);
      }
    } catch (error) {
      console.error("Error adding event: ", error);
    }
  };

  const addEvent = async (args) => {
    try {
      const newEventRef = await addDoc(collection(db, "events"), {
        // Subject: args.Subject,
        // StartTime: args.StartTime,
        // EndTime: args.EndTime,
        // IsAllDay: args.IsAllDay,
        // Location: args.Location,
        // Description: args.Description,
        Subject: doc.data().Subject,
        StartTime: doc.data().StartTime.toDate(),
        EndTime: doc.data().EndTime.toDate(),
        IsAllDay: doc.data().IsAllDay,
        Location: doc.data().Location,
        Description: doc.data().Description,
      });

      console.log("Event added with ID: ", newEventRef.id);
    } catch (error) {
      console.error("Error adding event: ", error);
    }
  };

  const updateEvent = async (args) => {
    const eventDocRef = doc(db, "events", args.id);
    await updateDoc(eventDocRef, {
      // Subject: args.Subject,
      // StartTime: args.StartTime.toDate(),
      // EndTime: args.EndTime.toDate(),
      // IsAllDay: args.IsAllDay,
      // Location: args.Location,
      // Description: args.Description,
      Subject: doc.data().Subject,
      StartTime: doc.data().StartTime.toDate(),
      EndTime: doc.data().EndTime.toDate(),
      IsAllDay: doc.data().IsAllDay,
      Location: doc.data().Location,
      Description: doc.data().Description,
    });
    console.log("Event updated with ID: ", args.id);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventRef = collection(db, "events");
        const eventSnapshot = await getDocs(eventRef);
        const eventData = eventSnapshot.docs.map((doc) => ({
          id: doc.id,
          Subject: doc.data().Subject,
          StartTime: doc.data().StartTime.toDate(),
          EndTime: doc.data().EndTime.toDate(),
          IsAllDay: doc.data().IsAllDay,
          Location: doc.data().Location,
          Description: doc.data().Description,
        }));
        setEvents(eventData);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-2 w-full h-[800px] schedule">
      <h2 className="text-2xl font-medium text-white text-center">
        Schedule Appointment
      </h2>
      <div className="">
        <ScheduleComponent
          className="rounded-md w-full mx-2"
          eventSettings={{ dataSource: events }}
          selectedDate={new Date()}
          currentView="Month"
          eventRendered={handleEventChange}
        >
          <ViewsDirective>
            <ViewDirective option="Day" />
            <ViewDirective option="Week" />
            <ViewDirective option="Month" />
          </ViewsDirective>

          <Inject services={[Day, Week, Month]} />
        </ScheduleComponent>
      </div>
    </div>
  );
};

export default Schedule;
