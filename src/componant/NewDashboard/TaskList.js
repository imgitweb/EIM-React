// src/components/TaskList.jsx
import React from "react";
import { FaEdit, FaTimes } from "react-icons/fa";

const tasks = [
  { id: 1, label: 'Sign contract for "What are conference organizers afraid of?"', done: false },
  { id: 2, label: 'Lines From Great Russian Literature? Or E-mails From My Boss?', done: true },
  { id: 3, label: 'Flooded: One year later, assessing what was lost...', done: true },
  { id: 4, label: 'Create 4 Invisible User Experiences you Never Knew About', done: true },
  { id: 5, label: 'Read "Following makes Medium better"', done: false },
  { id: 6, label: "Unfollow 5 enemies from twitter", done: false },
];

const TaskList = () => {
  return (
    <div className="card shadow-sm p-3 h-100">
      <h6 className="mb-1">Tasks</h6>
      <small className="text-muted mb-3 d-block">Backend development</small>
      <ul className="list-group list-group-flush">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-start">
            <div className="form-check">
              <input className="form-check-input me-2" type="checkbox" defaultChecked={task.done} />
              <label className={`form-check-label ${task.done ? "text-muted text-decoration-line-through" : ""}`}>
                {task.label}
              </label>
            </div>
            <div className="ms-auto d-flex gap-2">
              <FaEdit style={{ cursor: "pointer", color: "#00BFFF" }} />
              <FaTimes style={{ cursor: "pointer", color: "#FF5B7F" }} />
            </div>
          </li>
        ))}
      </ul>
      <div className="text-muted small mt-3">Updated 3 minutes ago</div>
    </div>
  );
};

export default TaskList;
