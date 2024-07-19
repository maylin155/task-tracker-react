import React from 'react';
import Task from './Task';

const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <div className='tasks-container'> 
    {tasks.map(task => <Task key={task.id} onToggle={onToggle} onDelete={onDelete} task={task}/>)}
    </div>
  )
}

export default Tasks