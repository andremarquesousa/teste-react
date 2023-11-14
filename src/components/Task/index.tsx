'use client';
import React, { useContext } from 'react'
import { Card } from './style';
import { TodoContext } from '@/context/todo-context';

const Task = ({ content }:any) => {
  const [todos, setTodos] = useContext( TodoContext );

  const updateTodo = (value:boolean) => {
    const newTodos = todos.map((item:any) => {
      if (content.id == item.id) {
        return {
          ...content,
          completed: value
        }
      } else {
        return item
      }
    });
    setTodos(newTodos);
  }

  const changeStatus = (event:any) => {
    updateTodo(event.target.checked);
  }

  const removeItem = () => {
    const newTodos = todos.filter((item:any) => {
      return item.id != content.id
    });
    setTodos(newTodos);
  }
  
  return (
    <Card>
      <label>
        <input type="checkbox" onChange={changeStatus} checked={content.completed} />
        <span></span>
        {content.name}
      </label>
      <button className='am-delete' type="button" onClick={removeItem}>Remover</button>
    </Card>
  );
}

export default Task;