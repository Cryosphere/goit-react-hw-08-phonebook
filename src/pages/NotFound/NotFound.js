import React from 'react';
import style from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>404 Page Not Found</h1>
      <p className={style.text}>The requested page was not found.</p>
    </div>
  );
}
