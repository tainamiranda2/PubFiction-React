import React from 'react';
import Button from '../../components/button/Button';
import Inputs from '../../components/inputs/Inputs';
import {useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";

export const Convidados= ()=>{
  const history=useNavigate();

  function AdicionarC(convidados){
      fetch("http://localhost:5000/convidados",{
        method:"POST",
        headers:{
          'Content-type': 'application/json',
        },
        body: JSON.stringify(convidados),
      })
      .then((resp)=>resp.json())
      .then((data)=>{
        console.log(data);
      })
      .catch((err)=> console.log(err))
      
      }

      return(
          <>
            <h1>Cadastre os convidados</h1>
      <p>Tenha controle sobre eles</p>
 <p>Aqui é a pagina de convidados</p>

          <form>
          <Inputs 
                text="informe o nome do convidado"
                name="nome"
                placeholder="Informe o nome do convidado"
                type="text"
                //value={nome}
                />
                  <Inputs 
                text="informe o email do convidado"
                name="email"
                placeholder="Informe o email do convidado"
                type="email"
                //value={nome}
                />
                  <Inputs 
                text="informe o número do convidado"
                name="celular"
                placeholder="Informe o número do convidado"
                type="tel"
                //value={celular}
                />
                  <Button text="Enviar" to="/"/>

          </form>
          </>

    )
}
