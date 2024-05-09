import React, { useState } from "react";

const EventForm = ({ selectedDate, onAddEvent }) => {
  const [event, setEvent] = useState({
    title: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent({ ...event, date: selectedDate.toISOString() });
    setEvent({
      title: "",
      startTime: "",
      endTime: "",
      description: "",
    });
  };
  return (
    <div>
      <div>
        <h2>Add Event</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={event.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <input
            type="time"
            name="startTime"
            value={event.startTime}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="endTime"
            value={event.endTime}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            value={event.description}
            onChange={handleChange}
            placeholder="Description"
          ></textarea>
          <button type="submit">Add Event</button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
