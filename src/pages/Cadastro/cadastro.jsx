import React from 'react';
import Button from '../../components/button/Button';
import Inputs from '../../components/inputs/Inputs';
export const Cadastro=()=>{


  return (
    <>
    <h1>Olá, aqui é a tela de cadastro</h1>
 <Inputs 
 name="Nome" 
 placeholder="Nome completo"
 type="text"
text="Nome"
 
 />

<Button text="Enviar" to="/"/>

    </>
  )
}