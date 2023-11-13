'use client';
import React from 'react'
import { Card } from './style';

const Task = ({ content }:any) => {
  return (
    <Card>
      <label>
        <input type="checkbox" />
        <span></span>
        {content.name}
      </label>
      <button className='am-delete' type="button">Remover</button>
    </Card>
  );
}

export default Task;