import React from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/button/Button';

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
  
/>
<Input
 type="email" 
name="email"
text="Email"
  placeholder="Digite seu email"
  handleOnChange={handleChange}
  
/>

<Input
 type="password" 
name="senha"
text="Senha"
  placeholder="Digite sua senha"
  handleOnChange={handleChange}

 
/>

<Input
 type="password" 
name="senha2"
text="Senha novamente"
  placeholder="Confirme sua senha"
  handleOnChange={handleChange}

/>

<Button text="Enviar" to="/"/>

    </>
  )
}