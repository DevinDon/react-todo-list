import React from 'react';
import styles from './Input.module.css';

export function Input({ addTodo }) {
  return (
    <input class="input" type="text" placeholder="新增一条待办事项..." />
  );
}