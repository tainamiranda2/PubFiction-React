import React from 'react';
import Card from "../../components/card/Card";
//import { useState } from 'react';
import * as C from './style';

export const Painel=()=>{
  //ao clicar mostrar um form
 // const [exibirForm, setExibirForm]=useState;

  return (
    <C.Container>
    <h1>Olá, aqui é a area de teste ou painel</h1>

<Card  to="/bife" text="Bife"/>
<Card  to="/endereco" text="Endereço"/>
<Card to="/musica" text="Música"/>
<Card  to="/horario" text="Horário"/>
<Card  to="/convidados" text="Convidados"/>
<Card  to="/logistica" text="Lógistica"/>
<Card to="/tema" text="Tema"/>

    </C.Container>
  )
}