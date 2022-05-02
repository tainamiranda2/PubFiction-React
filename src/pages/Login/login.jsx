import React from 'react';
import Button from '../../components/button/Button';


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
    <>
    <h1>Faça login</h1>
    <span>Esqueceu a senha?</span>
    <form onSubmit={enviardados} name="dados"> 
    



</form>
<Button handleOnChangeButton={button} text="Enviar"/>

    </>
  )
}
