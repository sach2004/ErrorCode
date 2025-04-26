import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addTask({ name: input, completed: false }); // ❌ Wrong prop name (onAdd expected)
    setInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
