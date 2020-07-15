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
      { title: '尝试新增一件待办事项', complete: false, time: Date.now() },
      { title: '已完成的事项', complete: true, time: Date.now() + 1 },
    ]
  );
  // useEffect(() => {

  // });
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Input />
        <div className="list">
          {todos.map(todo => <Item key={todo.time} {...todo}></Item>)}
        </div>
      </div>
    </div>
  );
}
