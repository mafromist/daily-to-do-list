import "../App.css";

const Unfinished = (props) => {
  return (
    <div className="addedTasksArea">
      <h1>Your Tasks</h1>
      <div className="addedTaskArea">
        <ul className="addedTask">
          {props.tasks.map((task) => (
            <li key={task.id}>
              <p className="listedTask">
                {task.text} Deadline:
                <span className="listedTaskDate">{task.deadline}</span>
              </p>
              <button
                className="doneBtn"
                onClick={() => (task.completed = true)}
              >
                Done
              </button>
              <button
                className="deleteBtn"
                onClick={() => props.delete(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Unfinished;
