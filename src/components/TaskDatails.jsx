import React from 'react';
import { useParams } from 'react-router-dom'

import Button from './Button'
import './TaskDetails.css';

const TaskDatails = () => {
    const params = useParams(); 

    return ( 
        <>
            <div className='back-button-container'>  
                <Button>Voltar</Button>
            </div>
            <div className="task-datails-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, perferendis! Facilis itaque est repellat dolorem!</p>
            </div>
        </>
     );
}
 
export default TaskDatails;