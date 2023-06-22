import { useState, useEffect } from 'react'
import './App.css'

const MyReactTaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    const task = { description: newTask, completed: false };
    setTasks([...tasks, task]);
  };

  const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.description}
            </span>
            <button onClick={() => toggleTaskStatus(index)}>
              {task.completed ? 'Pendiente' : 'Completa'}
            </button>
            <button onClick={() => deleteTask(index)}>Borrar</button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTask = e.target.task.value;
          addTask(newTask);
          e.target.task.value = '';
        }}
      >
        <input type="text" name="task" placeholder="Nueva tarea" />
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
};

export default MyReactTaskList;