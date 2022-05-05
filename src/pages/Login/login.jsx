import React from 'react';
import Button from '../../components/button/Button';
import Inputs from '../../components/inputs/Inputs';
import * as C from './style';

export const Login=()=>{
 
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
    <C.Container>
    <h1>Faça login e aproveite a plataforma.</h1>
    <form onSubmit={enviardados} name="dados"> 
    <Inputs 
 name="Nome" 
 placeholder="Nome completo"
 type="text"
text="Nome"
 
 />

<Inputs 
 name="Email" 
 placeholder="Email"
 type="email"
text="Email"
 
 />


<Inputs 
 name="Senha" 
 placeholder="Senha"
 type="password"
text="Senha"
 
 />
</form>
<span>Esqueceu a senha?</span>

<Button handleOnChangeButton={button} text="Enviar"/>

    </C.Container>
  )
}
