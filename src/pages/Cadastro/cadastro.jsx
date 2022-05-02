import React from 'react';
import Button from '../../components/button/Button';
import Inputs from '../../components/inputs/Inputs';
import * as C from './style';

export const Cadastro=()=>{


  return (
    <C.Container>
    <h1>Olá, faça seu cadastro e aproveite.</h1>
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
 placeholder="Confirme sua senha"
 type="password"
text="Senha*"
 
 />

<Inputs 
 name="Senha" 
 placeholder="Senha"
 type="password"
text="Senha"
 
 />
<Button text="Enviar" to="/"/>

    </C.Container>
  )
}