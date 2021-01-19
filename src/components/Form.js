import React, { useState }  from 'react'
import uuid from 'react-uuid'
const Form = ({tasks, setTasks}) => {
    
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [disableButton, setDisabledButton] = useState(true)

    const nameHandler = (e) =>{
        // e.target.value.length > 2 ? setDisabledButton(false) : setDisabledButton(true)
        if(e.target.value.length > 2){
            setDisabledButton(false)
        }
        else
        setDisabledButton(true)
        setName(e.target.value)
    }
    const descriptionHandler = (e) =>{
        setDescription(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setTasks([...tasks,{ name: name, description: description, status: false, created:new Date().toLocaleTimeString(), endDate: "" ,  id: uuid()}])
        setName('')
        setDescription('')
        setDisabledButton(true)
    }
    return (
        <form>
            <div className="mb-3">             
                <input onChange={nameHandler} value={name} type="text" className="form-control" placeholder="Name of task"/>
            </div>
            <div className="mb-4">
                <textarea onChange={descriptionHandler} value={description} className="form-control" rows="6" placeholder="Taskdescription"></textarea>
            </div>
            <div>
               <button onClick={submitHandler} disabled={disableButton} className="btn btn-secondary w-100 p-2" type="submit">Add task</button>
            </div>
        </form>
    )
}

export default Form
