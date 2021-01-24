import React from 'react'
import Task from './Task'

const TaskList = ({tasks,setTasks}) => {
    
    if(tasks.length === 0){
        return (
        <>
            <div id="task-list" className="mb-1 text-center task-weight">No tasks found.</div>
            <div className="text-center">Create a task with the Task manager form!</div> 
        </>
        )
    } 
    return (
        <div id="task-list" className="mb-5">   
           {
               tasks.map(task =>(
                   <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks}/>
                ))
           }
        </div>
    )
}

export default TaskList
