import { useState } from "react";
import "./App.css";
import Finished from "./Components/Finished";
import Unfinished from "./Components/Unfinished";
import Task from "./Components/Task";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("myTaskList") || "[]")
  );

  const saveTask = (task) => {
    const newData = [...tasks, task];
    setTasks(newData);
    localStorage.setItem("myTaskList", JSON.stringify(newData));
  };

  const deleteTaskHandler = (taskId) => {
    setTasks(tasks.filter((task) => taskId !== task.id));
  };

  return (
    <div className="App">
      <div className="appCont">
        <div className="titleArea">
          <h1>Like every other to-do-list</h1>
          <p>Add task and the deadline for them</p>
        </div>
        <Task tasks={tasks} onSave={saveTask} />
      </div>
      <div className="taskArea">
        <Unfinished
          tasks={tasks.filter((item) => !item.completed)}
          delete={deleteTaskHandler}
        />
        <Finished
          tasks={tasks.filter((item) => item.completed)}
          delete={deleteTaskHandler}
        />
      </div>
    </div>
  );
};
export default App;
