import React,{ useState } from 'react'
import Form from './Form'
import TaskList from './TaskList'
const Main = () => {
    const [tasks, setTasks] = useState([])

    return (
        <main className="container mt-4">
            <div className="row">
                <div className="col-5">
                   <Form tasks={tasks} setTasks={setTasks} />
                </div>
                <div className="col-7 ps-5">
                    <TaskList tasks={tasks} setTasks={setTasks}/>
                </div>
            </div>
        </main>
    )
}

export default Main
