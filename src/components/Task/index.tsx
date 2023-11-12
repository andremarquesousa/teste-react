'use client';
import React from 'react'
import { Card } from './style';

class Task extends React.Component<any, any> {
  constructor(props:any){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Card>
        <label>
          <input type="checkbox" />
          <span></span>
          {this.props.content.name}
        </label>
      </Card>
    );
  }
}

export default Task;