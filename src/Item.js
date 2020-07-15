import { CheckCircleOutlined, CloseCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import React from 'react';
import styles from './Item.module.css';

export function Item({ title, completed, time, completeTodo, removeTodo }) {
  return (
    <div className={styles.item}>
      <span className={styles.left}>
        <div className={styles.icon} onClick={() => completeTodo(time)}>
          {completed ? <CheckCircleOutlined /> : <LoadingOutlined />}
        </div>
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</span>
      </span>
      <CloseCircleOutlined className={styles.delete} onClick={() => removeTodo(time)} />
    </div>
  );
}