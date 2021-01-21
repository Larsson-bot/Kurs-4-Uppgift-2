import React, { useState }  from 'react'
import uuid from 'react-uuid'
const Form = ({tasks, setTasks}) => {
    
    const [name, setName] = useState('')
    const [disableButton, setDisabledButton] = useState(true)

    const nameHandler = (e) =>{
        // e.target.value.length > 2 ? setDisabledButton(false) : setDisabledButton(true)
        if(e.target.value.length > 2 && e.target.value.length < 60){
            setDisabledButton(false)
        }
        else
        setDisabledButton(true)
        setName(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setTasks([...tasks,{ name: name, status: false, created:new Date().toLocaleTimeString(), id: uuid()}])
        setName('')
        setDisabledButton(true)
    }
    return (
        <form>
            <div className="mb-4">             
                <input onChange={nameHandler} value={name} type="text" className="form-control" placeholder="Insert task here!"/>
            </div>
            <div>
               <button onClick={submitHandler} disabled={disableButton} className="btn btn-secondary w-100 p-2" type="submit">Add task</button>
            </div>
        </form>
    )
}

export default Form
