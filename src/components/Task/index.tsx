import React from 'react'
import { Card } from './style';

export default class Task extends React.Component<any, any> {
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
        </label>
        {this.props.content.name}
      </Card>
    );
  }
}