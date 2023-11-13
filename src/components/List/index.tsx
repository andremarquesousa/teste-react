'use client';
import React from 'react'
import Task from "../Task";
import { ListBlock } from './style';

const List = () => {
  const items = [
    {
      id: '1',
      name: 'Desenvolver header',
    },
    {
      id: '2',
      name: 'Desenvolver footer',
    },
    {
      id: '3',
      name: 'Desenvolver content',
    }
  ]

  return (
    <ListBlock>
      <h2>Tarefas</h2>
      <div className='am-top'>
        <form>
          <input type="text" placeholder="Add nova tarefa" />
          <button type="submit">Add</button>
        </form>
        <select>
          <option defaultValue="">Todas</option>
          <option value="pending">Pendentes</option>
          <option value="completed">Concluídas</option>
        </select>
      </div>
      {items.length > 0 && items.map((item:any) => <Task content={item} key={item.id} />)}
      {items.length == 0 && <p>Nenhuma tarefa criada</p>}
    </ListBlock>
  );
}

export default List;