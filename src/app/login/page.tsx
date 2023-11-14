'use client';

import { useRouter } from 'next/navigation';
import { Form } from './style'
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  user: string;
  password: string;
};

const LoginPage = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const { push } = useRouter();
  const onSubmit: SubmitHandler<FormValues> = data => {
    sessionStorage.setItem("react-token", data.user);
    push('/home');
  };
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span className="am-input-label">Usuário</span>
        <input type="text" placeholder="Digite o usuário" {...register("user", {required: true})}  />
      </label>
      <label>
        <span className="am-input-label">Senha</span>
        <input type="password" placeholder="Digite a senha" {...register("password", {required: true, minLength: 8, maxLength: 8})} />
      </label>
      <button type="submit" disabled={!formState.isValid}>Entrar</button>
    </Form>
  )
}

export default LoginPage;
