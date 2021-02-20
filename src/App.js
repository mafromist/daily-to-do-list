import {useEffect, useState} from 'react'
import './App.css';


const App = () => {
const [taskText, setTaskText] = useState('');
const [taskDeadline, setTaskDeadline] = useState('');
const [tasks, setTasks] = useState(JSON.parse(localStorage.get('tasks')) || []);

const handleTextChange = (e) => setTaskText(e.target.value);
const handleDeadlineChange = (e) => setTaskDeadline(e.target.value);

const handleClickAddBtn = (e) => {
  tasks.concat[{handleTextChange}, {handleDeadlineChange}]
  setTasks(e.target.value)
}

/* class App extends Component {
 /*added a digital date and clock 
 componentDidMount() { 
  this.update = setInterval(() => {
      this.setState({ time: new Date() });
  }, 1 * 1000);
}

componentWillUnmount() { 
  clearInterval(this.update);
}

} */

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
                  <label for="task">Your Task:</label>
                  <input className="taskInput input" type="text" 
                  onChange={handleTextChange} placeHolder="Add your Task here"
                  value={taskText} name="task"></input>

                  </div>
                  <div>

                  <label for="deadline">When should you finish the task? </label>
                  <input className="deadlineInput input" name="deadline" 
                  type="date" value="2018-07-22" onChange={handleDeadlineChange} 
                  value={taskDeadline}></input>

                </div>
              </div>
              <div>
                  <button className="saveBtn" onClick={handleClickAddBtn}>
                    Add to List</button>
              </div>
            </div>
          </div>

          <div className="taskArea">
            <div className="addedTasksArea">
              <h1>Your Tasks</h1>
              <div className="addedTaskArea">
                <ul className="addedTask">{tasks}</ul>
              </div>
            </div>

            {/* <div className="finishedArea">
                <h2>finished Tasks</h2>
                <ul className="finishedTasks">{eachArcTasks}</ul>
            </div> */}
          </div>
        </div>

        {/* <div className="clock">
            {time.toLocaleString()}
        </div> */}
      </div>
  );
}

export default App;
