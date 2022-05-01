import React from 'react';
//import Input from '../../components/Input/Input';
import Button from '../../components/button/Button'
export const Convidados= ()=>{
 // function handleChange(){

  //}
    return (
     
        <>
        <h1>Cadastre os convidados</h1>
        <p>Tenha controle sobre eles</p>
  {/**    <Input 
      type="text"
      name="name"
      text="Nome do convidado"
      placeholder="Digite o nome do convidado?"
handleOnChange={handleChange}
      />

<Input 
      type="text"
      name="name"
      text="Email do convidado"
      placeholder="Digite o email do convidado?"
handleOnChange={handleChange}
      />
  <  Input 
      type="number"
      name="name"
      text="Número/Whatszap do convidado"
      placeholder="Número/whatszap do convidado?"
      handleOnChange={handleChange}
      />
      */}
      <Button text="Enviar" to="/"/>

        </>
    )
}
