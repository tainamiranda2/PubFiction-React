import React from 'react';
import Button from '../../components/button/Button';

import Input from '../../components/input/Input';


export const Login=()=>{
 function handleChange(){
    alert("Respondido com sucesso");
    //seria para pegar dados
  }
  function button(){
   alert("Login efutuado com sucesso");

  }

  //função para validar campos
function enviardados() {
  if(document.dados.name==""){
    alert("Preencha o nome corretamente");
  }
}


  return (
    <>
    <h1>Faça login</h1>
    <span>Esqueceu a senha?</span>
    <form onSubmit={enviardados} name="dados"> 
    
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

</form>
<Button handleOnChangeButton={button} text="Enviar"/>

    </>
  )
}
