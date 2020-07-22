import React, { useState } from 'react';

export function TodoForm({ addTodo, todos, setFilteredTodos }) {

  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    value && addTodo(value);
    setValue('');
  }

  /**
   * 筛选待办事项
   *
   * @param {string} title 待办事项的标题
   */
  const filter = title => {
    console.log('filter', title);
    const newTodos = todos.filter(todo => todo.title.includes(title));
    setFilteredTodos(newTodos);
  }

  const handleChange = event => {
    const current = event.target.value;
    setValue(current);
    filter(current);
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
