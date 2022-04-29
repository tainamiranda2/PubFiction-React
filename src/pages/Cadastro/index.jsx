import React from 'react';
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

export const Cadastro=()=>{
  
  function handleChange(){

  }
  return (
    <>
    <h1>Olá, aqui é a tela de cadastro</h1>
    <Input
 type="text" 
name="name"
text="Nome completo"
  placeholder="Digite seu nome"
  handleOnChange={handleChange}
  value={create}
/>
<Input
 type="email" 
name="name"
text="Email"
  placeholder="Digite seu email"
  handleOnChange={handleChange}
  value={create}
/>

<Input
 type="password" 
name="name"
text="Senha"
  placeholder="Digite sua senha"
  value={create}
/>

<Input
 type="password" 
name="name"
text="Senha novamente"
  placeholder="Confirme sua senha"
  handleOnChange={handleChange}
  value={create}
/>

<Button text="Enviar" to="/"/>

    </>
  )
}
//