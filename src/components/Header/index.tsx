import React from 'react'
import { HeaderBlock } from './style'

export default class Header extends React.Component<any, any> {
  constructor(props:any){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <HeaderBlock>
        <h1>Teste react</h1>
      </HeaderBlock>
    );
  }
}