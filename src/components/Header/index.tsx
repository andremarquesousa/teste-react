'use client';
import { checkAuth } from '@/utils/check-auth';
import { HeaderBlock } from './style'
import React from 'react';

class Header extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      auth: false
    };
  }

  componentDidMount(): void {
    this.setState({
      auth: checkAuth()
    });
  }

  render() {
    return (
      <HeaderBlock>
        <h1>Teste react</h1>
        { this.state.auth && <button type="button">Sair</button> }
      </HeaderBlock>
    );
  }
}

export default Header;