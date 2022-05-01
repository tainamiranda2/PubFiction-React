import React from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/button/Button';


export const Login=()=>{
  function handleChange(){
    
  }
  return (
    <>
    <h1>Aqui é a págin de login</h1>
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
text="email"
  placeholder="Digite seu email"
  handleOnChange={handleChange}
 
/>

<Input
 type="password" 
name="senha"
text="senha"
  placeholder="Digite sua senha"
  handleOnChange={handleChange}
  
/>

<Button text="Enviar" to="/"/>
    </>
  )
}
