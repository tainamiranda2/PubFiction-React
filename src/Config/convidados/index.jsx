import React from 'react';
import Button from '../../components/button/Button';
import Inputs from '../../components/inputs/Inputs';
import Table from '../../components/table/Table';

export const Convidados= ()=>{
 function handleChange(){

  }
    return (
     
        <>
        <h1>Cadastre os convidados</h1>
        <p>Tenha controle sobre eles</p>
     
      <form>

<Inputs 
 name="name" 
 placeholder="Nome completo"
 type="text"
text="Nome"
/>

<Inputs 
 name="email" 
 placeholder="Email"
 type="email"
text="Email"
 />
    
      </form>
      <Button text="Enviar" to="/"/>

<h2>Convidados</h2>
<Table nome="Lucas" contato="lucas@email.com" />
<Table nome="Pedro" contato="pedro@email.com" />
<Table nome="Carol" contato="carol@email.com" />


        </>
    )
}
