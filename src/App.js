import React, { useState, useEffect } from 'react'
import { Input } from './Input'
import { Item } from './Item'
import styles from './App.module.css';

// interface Todo {
//   title: string;
//   completed: boolean;
//   time: Date | number; // 为了便于存储
// }

function loadTodosFromLocal() {
  const todos = localStorage.getItem('todos');
  return todos && JSON.parse(todos);
}

function saveTodosToLocal(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

export function App() {
  const [todos, setTodos] = useState(
    loadTodosFromLocal() || [
      { title: '尝试新增一件待办事项', completed: false, time: Date.now() },
      { title: '已完成的事项', completed: true, time: Date.now() + 1 },
    ]
  );
  const addTodo = title => setTodos([{ title, completed: false, time: Date.now() }, ...todos]);
  const completeTodo = time => setTodos(
    todos.map(todo => {
      todo.time === time && (todo.completed = !todo.completed);
      return todo;
    })
  );
  const removeTodo = time => setTodos(todos.filter(todo => todo.time !== time));
  useEffect(() => saveTodosToLocal(todos), [todos]);
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Input addTodo={addTodo} />
        <div className={styles.list}>
          {todos.map(todo => <Item key={todo.time} completeTodo={completeTodo} removeTodo={removeTodo} {...todo}></Item>)}
        </div>
      </div>
    </div>
  );
}
