import React from 'react';
import Card from "../../components/card/Card";
//import { useState } from 'react';
export const Painel=()=>{
  //ao clicar mostrar um form
 // const [exibirForm, setExibirForm]=useState;

  return (
    <>
    <h1>Olá, aqui é a area de teste ou painel</h1>

<Card  to="/step1" text="Bife"/>
<Card  to="/" text="Endereço"/>
<Card to="/" text="Música"/>
<Card  to="/" text="Horário"/>
<Card  to="/" text="Horário"/>
<Card  to="/" text="Convidados"/>
<Card  to="/" text="Lógistica"/>
<Card to="/" text="Tema"/>

    </>
  )
}