import { useEffect, useState } from "react";
import "./App.css";

const useStateWithLocalStorage = (localStorageKey) => {
  const[value, setValue] = useState (
    localStorage.getItem(localStorageKey || "")
  )

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
}

const App = () => {
  const [addTask, setAddTask] = useStateWithLocalStorage('myTaskList');
  const [addDeadline, setAddDeadline] = useStateWithLocalStorage('myTaskList')
  const [newTasks, setNewTasks] = useStateWithLocalStorage(JSON.parse('myTaskList') || []);

  useEffect( () => {
    localStorage.setItem('myTaskList', addTask);
  }, [addTask])

  const handleTaskAdd = (e) => {
    setAddTask(e.target.value);
  };
  const handleTaskDeadline = (e) => {
    setAddDeadline(e.target.value);
  };

  const createTask = () => {
    setNewTasks([
      ...newTasks,
      {
        id: newTasks.length,
        taskText: addTask,
        taskDeadline: addDeadline,
        completed: false,
      },
    ]);
  };

  const handleListTasks = (e) => {
    e.preventDefault();
    if (addTask === "") return;
    createTask();
    setAddTask("");
    setAddDeadline("");
  };

  const handleDeleteTask = (taskId) => {
    const deletedTasks = newTasks.filter((addTask) => addTask.id !== taskId);
    setNewTasks(deletedTasks);
  };

  const [doneTasks, setDoneTasks] = useStateWithLocalStorage(JSON.parse('myTaskList') || []);

  const completeTasks = () => {
    setDoneTasks([
      ...doneTasks,
      {
        completed: true,
      },
    ]);
  };

  const handleCompletedTasks = (e) => {completeTasks();};

  const deleteCompletedTasks = (taskId) => {
    const restDoneTasks = doneTasks.filter((doneTask) => doneTask.id !== taskId);
    setDoneTasks(restDoneTasks);
  };

  return (
    <div className="App">
      <div className="upCont">
        <div className="appCont">
          <div className="titleArea">
            <h1>Like every other to-do-list</h1>
            <p>Add task and the deadline for them</p>
          </div>

          <div className="appInfo">
            <div className="inputArea">
              <div>
                {/* user enter the task here */}
                <label htmlFor="task">Your Task:</label>
                <input
                  className="taskInput input"
                  type="text"
                  onChange={handleTaskAdd}
                  placeholder="Add your Task here"
                  value={addTask}
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
                  onChange={handleTaskDeadline}
                  value={addDeadline}
                ></input>
              </div>
            </div>
            <div>
              <button className="saveBtn" onClick={handleListTasks}>
                Add to List
              </button>
            </div>
          </div>
        </div>

        <div className="taskArea">
          <div className="addedTasksArea">
            <h1>Your Tasks</h1>
            <div className="addedTaskArea">
              <ul className="addedTask">
                {newTasks.map((task) => (
                  <li key={task.id}>
                    <h2 className="listedTask">
                      {task.taskText} Deadline:
                      <span className="listedTaskDate">
                        {task.taskDeadline}
                      </span>
                    </h2>
                    <button
                      className="doneBtn"
                      onClick={() => handleCompletedTasks(task.taskStatus)}
                    >
                      Done
                    </button>
                    <button
                      className="deleteBtn"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="finishedArea">
            <h2>finished Tasks</h2>
            <ul className="finishedTasks">
              {doneTasks.map((task) => (
                <li key={task.id}>
                  <h2 className="listedTask">
                    {task.taskText} Deadline:
                    <span className="listedTaskDate">{task.taskDeadline}</span>
                  </h2>
                  <button
                    className="deleteBtn"
                    onClick={() => deleteCompletedTasks(task.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
