import React, { useState } from 'react';

export function Form({ todos, setTodos, addTodo }) {

  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    value && addTodo(value);
    setValue('');
  }

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="创建待办事项..."
        value={value}
        onChange={handleChange}
      />
    </form>
  );

}
