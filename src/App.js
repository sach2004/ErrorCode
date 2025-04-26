import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, [tasks]); // ❌ Wrong dependency! Infinite loop risk.

  async function fetchTasks() {
    const response = await fetch('/api/tasks');
    const data = await response.json();
    setTasks(data);
  }

  function addTask(newTask) {
    tasks.push(newTask); // ❌ Mutating state directly
    setTasks(tasks);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <AddTask onAdd={addTask}/>
      <TaskList items={tasks} /> {/* ❌ Wrong prop name */}
    </div>
  );
}

export default App;
