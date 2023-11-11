import React from 'react'
import { FooterBlock } from './style'

export default class Footer extends React.Component<any, any> {
  constructor(props:any){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <FooterBlock>
        <p>André Marques © Copyright 2023</p>
      </FooterBlock>
    );
  }
}