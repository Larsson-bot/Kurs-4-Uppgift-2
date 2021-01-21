import React from 'react'

const Task = ({task,tasks, setTasks}) => {
    const deleteHandler = () =>  {
        setTasks(tasks.filter(item => item.id !== task.id))
    }
    const statusHandler = () => {
        setTasks(tasks.map(item =>{
    if(item.id === task.id){
        if(item.status === true){
            return{
                ...item, status: !item.status, completed: item.completed = "" 
            }
        }
        return{
            ...item, status: !item.status , completed: item.completed = new Date().toLocaleTimeString()
        }
       
    }
    return item
}))
    }
    return (
        <div className="border mb-2 p-3">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <div className="name">{task.name}</div>   
                    <div className="timedisplay">Created: {task.created}</div>
                    <div className="timedisplay">Completed: {task.completed}</div>
                </div>
                <div>
                    <i onClick={statusHandler} className={`fas fa-check me-3 pointer ${task.status ? 'status-true' :'status-false' }` } ></i>
                    <i onClick={deleteHandler} className="fas fa-trash-alt pointer"></i>
                </div>
            </div>
        </div>
    )
}

export default Task
