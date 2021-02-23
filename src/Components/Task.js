import { useState } from 'react';
import "../App.css";

const Task = (props) => {
  const [taskDeadline, setTaskDeadline] = useState("");
  const [taskText, setTaskText] = useState("");

  const handleTaskTextChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleTaskDeadlineChange = (e) => {
    setTaskDeadline(e.target.value);
  };

  return (
      <div className="appInfo">
          <div className="inputArea">
            <div>
              <label htmlFor="task">Your Task:</label>
              <input
                className="taskInput input"
                type="text"
                onChange={handleTaskTextChange}
                placeholder="Add your Task here"
                value={taskText}
                name="task"
              ></input>
            </div>
            <div>
              <label htmlFor="deadline">
                When should you finish the task?{" "}
              </label>
              <input
                className="deadlineInput input"
                name="deadline"
                type="date"
                onChange={handleTaskDeadlineChange}
                value={taskDeadline}
              ></input>
            </div>
          </div>
          <div>
          <button className="saveBtn" onClick={() => props.onSave({
              id: props.tasks.length,
              completed: false,
              text: taskText,
              deadline: taskDeadline
          })}>
              Add to List
            </button>
          </div>
        </div>
    )
}

export default Task;
