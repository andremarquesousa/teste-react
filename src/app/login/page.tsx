'use client';

import { Form } from './style'

const LoginPage = () => {
  return (
    <Form>
      <label>
        <span className="am-input-label">Usuário</span>
        <input type="text" placeholder="Digite o usuário" />
      </label>
      <label>
        <span className="am-input-label">Senha</span>
        <input type="password" placeholder="Digite a senha" />
      </label>
      <button type="submit">Entrar</button>
    </Form>
  )
}

export default LoginPage;
