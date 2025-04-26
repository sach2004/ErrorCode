// App.js
import React from 'react';
import { useStat, useEfect } from 'react'; // (Mistake 1: typo in imports)

function App() {
  const [tasks, setTask] = useStat([]); // (Mistake 2: typo useStat instead of useState)

  useEfect(() => { // (Mistake 3: typo useEfect instead of useEffect)
    setTask(['Buy milk', 'Walk dog']);
  }, []);

  function addTask(newTask) {
    setTask(tasks.push(newTask)); // (Mistake 4: wrong way to update state, push returns length not array)
  }

  return (
    <div className="container">
      <h1>Task List</h1>
      <TaskList task={tasks} /> {/* (Mistake 5: wrong prop name, should be tasks not task) */}
      <button onClick={() => addTask('New Task')}>Add New Task</button>
    </div>
  );
}

function TaskList({ task }) { // (Mistake 6: wrong prop name expected, should be tasks)
  return (
    <ul>
      {task.map((t, idx) => ( // (Mistake 7: map might fail if task is undefined)
        <li key={idx}>{t}</li>
      ))}
    </ul>
  );
}

export default App;
