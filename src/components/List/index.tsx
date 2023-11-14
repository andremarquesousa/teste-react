'use client';
import React, { useContext, useEffect, useId, useState } from 'react'
import Task from "../Task";
import { ListBlock } from './style';
import { TodoContext } from '@/context/todo-context';
import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

type FormValues = {
  task: string;
};

const List = () => {
  const [status, setStatus] = useState<any>('');
  const [todos, setTodos] = useContext( TodoContext );
  const [filterItems, setFilterItems] = useState<any>('');
  const { register, handleSubmit, formState, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => {
    const id = uuidv4();
    const newTodos = [...todos, {id: id, name: data.task, completed: false}];
    setTodos( newTodos );
    reset();
  };

  useEffect(()=> {
    setFilterItems(todos);
  }, [todos])

  const filterStatus = (event:any) => {
    let newTodos;
    if (event.target.value == 'pending') {
      newTodos = todos.filter((item:any) => {
        return !item.completed
      });
    } else if (event.target.value == 'completed') {
      newTodos = todos.filter((item:any) => {
        return item.completed
      });
    } else {
      newTodos = todos;
    }

    setFilterItems(newTodos);
  }

  return (
    <ListBlock>
      <h2>Tarefas</h2>
      <div className='am-top'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Add nova tarefa" {...register("task", {required: true, minLength: 3, maxLength: 20})} />
          <button type="submit" disabled={!formState.isValid}>Add</button>
        </form>
        <select onChange={filterStatus}>
          <option defaultValue="">Todas</option>
          <option value="pending">Pendentes</option>
          <option value="completed">Concluídas</option>
        </select>
      </div>
      <div className='am-list'>
        {filterItems.length > 0 && filterItems.map((item:any) => <Task content={item} key={item.id} />)}
        {filterItems.length == 0 && <p className="am-without-task">Nenhuma tarefa criada</p>}
      </div>
    </ListBlock>
  );
}

export default List;