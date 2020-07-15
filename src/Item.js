import { CheckCircleOutlined, CloseCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import React from 'react';
import styles from './Item.module.css';

export function Item({ title, completed, time }) {
  return (
    <div className={styles.item}>
      <span className={styles.left}>
        {completed ? <CheckCircleOutlined className={styles.icon} /> : <LoadingOutlined className={styles.icon} />}
        <span>{title}</span>
      </span>
      <CloseCircleOutlined className={styles.delete} />
    </div>
  );
}