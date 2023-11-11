import React from 'react'
import Task from "../Task";
import { ListBlock } from './style';

export default class List extends React.Component<any, any> {
  constructor(props:any){
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          name: 'desenvolver header',
        },
        {
          id: 2,
          name: 'desenvolver footer',
        },
        {
          id: 3,
          name: 'desenvolver content',
        }
      ]
    }
  }

  render() {
    return (
      <ListBlock>
        <h2>Tarefas</h2>
        <select>
          <option value="" selected>Todas</option>
          <option value="pending">Pendentes</option>
          <option value="completed">Concluídas</option>
        </select>
        <form>
          <input type="text" placeholder="Add nova tarefa" />
          <button type="submit">Add</button>
        </form>
        {this.state.items.map((item:any) => <Task content={item} key={item.id} />)}
      </ListBlock>
    );
  }
}