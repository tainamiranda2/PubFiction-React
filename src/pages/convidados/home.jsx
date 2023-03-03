import React from 'react';
import { useNavigate } from "react-router-dom";
import Table from '../../components/table/Table';

//import * as C from './style';
import Button from '../../components/button/Button';
import Inputs from '../../components/inputs/Inputs';
import {useState,useEffect} from 'react';

export const Home=({handleSubmit, btn,projetoData})=>{
    //salvando
const [projeto,setProjeto]=useState(projetoData || {})
//states para mostrar

//const [tabela,setTabela]=useState([])

    //directionar para outra pagina
 const history=useNavigate();
 
 //função para pegar
   useEffect(()=>{
     fetch('http://localhost:5000/convidados',{
       method:'GET',
       headers:{
         'Content-Type':'application/json',
       },
     })
 .then((resp)=>resp.json())
 .then((data)=>{
   setProjeto(data)
 })
 .catch((err)=>console.log(err))
 
   },[])
 
   //previnindo reloud
 const submit=(e)=>{
   e.preventDefault()
 handleSubmit(projeto)
 }
   
 //mudando o nome do projeto
 function handleChange(e){
   setProjeto({...projeto,[e.target.name]:e.target.value})
 //  setProjeto({...projeto,[e.target.email]:e.target.value})

 console.log(projeto)
 }
 
 //função para mostrar
 useEffect
     return (
      
         <>
       <form  onSubmit={submit}>
 
 <Inputs 
  name="name" 
  placeholder="Nome completo"
  type="text"
 text="Nome"
 value={projeto.name ? projeto.name:""}
 handleOnChange={handleChange}
 />
 
 <Inputs 
  name="email" 
  placeholder="Email"
  type="email"
 text="Email"
 value={projeto.email ? projeto.email :""}
 handleOnChange={handleChange}

  />
       <Button  handleOnChangeButton={handleSubmit} text={btn} />
 
       </form>
       <p>Aqui é a pagina home</p>

 <h2>Convidados</h2>
<div>
{projeto.length>0 && 
  projeto.map((tabela)=> <Table nome={tabela.name} />
  )
}

</div>
 
     
         </>
        )
}
