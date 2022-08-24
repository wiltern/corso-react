import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg'
import {useNavigate} from 'react-router-dom'

import './task.css'

const Task = ({ task, handleTaskClick, handleTaskDeletion })=> {
    const history = useNavigate();

    const handleTaskDetailsClick = () =>{
        history.push(`${task.title}`)
    }
    return (
        <div 
            className='task-container' 
            style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}
        >
            <div className='task.title' onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className='buttons-container'>
                <button
                className='remove-task-button' 
                onClick={() => handleTaskDeletion(task.id)}
                >
                    <CgClose />
                </button>
                <button
                className='see-task-datails-button' onClick={handleTaskDetailsClick } >
                    <CgInfo />
                </button>
            </div>
        </div>
    )

    
    // return <div className='task-container'>{task.title}</div>
};
 
export default Task; 