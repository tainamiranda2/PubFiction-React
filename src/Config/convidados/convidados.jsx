import React from 'react';

//import Table from '../../components/table/Table';
import {useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { Home } from './home';

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
          <Home handleSubmit={AdicionarC} btn="Enviar"/>

          
          </>

    )
}
