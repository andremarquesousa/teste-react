'use client';
import { checkAuth } from '@/utils/check-auth';
import { HeaderBlock } from './style'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [ auth, setAuth ] = useState<any>();
  const authCheck:any = checkAuth();
  const { push } = useRouter();

  useEffect(() => {
    setAuth(authCheck);
  }, [auth, authCheck]);

  
  const logout = () => {
    sessionStorage.removeItem("react-token");
    setAuth(false);
    push('/login');
  }

  return (
    <HeaderBlock>
      <h1>Teste react</h1>
      { auth && <button type="button" onClick={logout}>Sair</button> }
    </HeaderBlock>
  );
}

export default Header;