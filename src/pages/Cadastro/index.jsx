import React from 'react';
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

export const Cadastro=()=>{
  return (
    <>
    <h1>Olá, aqui é a tela de cadastro</h1>
    <Input
 type="text" 
name="name"
text="Nome completo"
  placeholder="Digite seu nome"
/>
<Input
 type="email" 
name="name"
text="Email"
  placeholder="Digite seu email"
/>

<Input
 type="password" 
name="name"
text="Senha"
  placeholder="Digite sua senha"
/>

<Input
 type="password" 
name="name"
text="Senha novamente"
  placeholder="Confirme sua senha"
/>

<Button text="Enviar" to="/"/>

    </>
  )
}
//