// import { tasks as data } from './tasks';
// import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext'
import TaskCard from "./TaskCard";

function TaskList() {
  // const [ tasks, setTasks ] = useState(data);

  // useEffect( () => {
  //     setTasks(data);
  // }, []);

  const {tasks} = useContext(TaskContext);

  if (tasks.length == 0) {
    return <h1 className='text-4xl text-white font-bold text-center'>No hay tareas aún</h1>;
  }

  return (
    <div className='grid grid-cols-4 gap-2'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
