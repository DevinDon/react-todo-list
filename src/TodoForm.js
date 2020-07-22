import React, { useState } from 'react';

export function TodoForm({ addTodo, todos, setFilteredTodos }) {

  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    value && addTodo(value);
    setValue('');
  }

  const search = title => {
    console.log('search', title);
    const newTodos = todos.filter(todo => todo.title.includes(title));
    setFilteredTodos(newTodos);
  }

  const handleChange = event => {
    const current = event.target.value;
    setValue(current);
    search(current);
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
