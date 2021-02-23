import "../App.css";

const Finished = (props) => {
    return (
        <div className="finishedArea">
            <h2>finished Tasks</h2>
            <ul className="finishedTasks">
              {props.tasks.map((task) => (
                <li key={task.id}>
                  <p className="listedTask">
                    {task.text} Deadline:
                    <span className="listedTaskDate">{task.deadline}</span>
                  </p>
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
    )
}

export default Finished;
