import React from 'react';
import Card from "../../components/card/Card";
import { useState } from 'react';
export const Painel=()=>{
  //ao clicar mostrar um form
 // const [exibirForm, setExibirForm]=useState;

  return (
    <>
    <h1>Olá, aqui é a area de teste ou painel</h1>

<Card  text="Bife"/>
<Card text="Endereço"/>
<Card text="Música"/>
<Card text="Horário"/>
<Card text="Horário"/>
<Card text="Convidados"/>
<Card text="Lógistica"/>
<Card text="Tema"/>

    </>
  )
}