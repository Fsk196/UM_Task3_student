import React, { useState } from "react";
import EventForm from "./EventForm";

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const handleAddEvent = () => {};

  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center mx-auto p-4">
      <div>
        <h1 className="text-2xl font-bold mb-4">Event Calendar</h1>
        <div className="flex justify-between mb-4">
          <button
            onClick={() =>
              setSelectedDate(
                new Date(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth() - 1
                )
              )
            }
          >
            Prev Month
          </button>
          <h2 className="text-xl font-bold">
            {selectedDate.toLocaleString("default", { month: "long" })}{" "}
            {selectedDate.getFullYear()}
          </h2>
          <button
            onClick={() =>
              setSelectedDate(
                new Date(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth() + 1
                )
              )
            }
          >
            Next Month
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-bold">
              {day}
            </div>
          ))}

          {Array.from(
            {
              length: new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                1
              ).getDay(),
            },
            (_, i) => (
              <div key={i} className=""></div>
            )
          )}
          {calendarDays.map((day) => (
            <div
              key={day}
              className={`p-2 border text-center ${
                day === selectedDate.getDate() ? "bg-blue-200" : ""
              }`}
              onClick={() =>
                new Date(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth(),
                  day
                )
              }
            >
              {day}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">
            Events For {selectedDate.toLocaleDateString("en-US")}
          </h2>
          <ul>
            {events
              .filter(
                (event) =>
                  new Date(event.date).toLocaleDateString("en-US") ===
                  selectedDate.toLocaleDateString("en-US")
              )
              .map((event) => (
                <li key={event.id}>
                  <strong>{event.title}</strong> - {event.startTime} to{" "}
                  {event.endTime}
                </li>
              ))}
          </ul>
          <EventForm selectedDate={selectedDate} onAddEvent={handleAddEvent} />
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
