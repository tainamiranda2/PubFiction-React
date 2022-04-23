import React from 'react';
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

export const Login=()=>{
  return (
    <>
    
<Input
 type="text" 
name="name"
text="Nome completo"
  placeholder="Digite seu nome"
/>
<Input
 type="email" 
name="name"
text="email"
  placeholder="Digite seu email"
/>

<Input
 type="password" 
name="name"
text="senha"
  placeholder="Digite sua senha"
/>

<Button text="Enviar" to="/"/>
    </>
  )
}
