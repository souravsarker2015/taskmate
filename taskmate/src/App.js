import './App.css';
import {Header} from "./components/Header";
import {AddTask} from "./components/AddTask";
import {ShowTask} from "./components/ShowTask";
import {useEffect, useState} from "react";

function App() {
    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('tasklist')) || []);
    const [task, setTask] = useState({})

    useEffect(() => {
        localStorage.setItem("tasklist", JSON.stringify(taskList))
    }, [taskList]);

    return (
        <div className="App">
            <Header/>
            <AddTask
                taskList={taskList}
                setTaskList={setTaskList}
                task={task}
                setTask={setTask}
            />
            <ShowTask
                taskList={taskList}
                setTaskList={setTaskList}
                task={task}
                setTask={setTask}
            />
        </div>
    );
}

export default App;
