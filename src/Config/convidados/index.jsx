import React from 'react';
import Button from '../../components/button/Button';
import Inputs from '../../components/inputs/Inputs';
import Table from '../../components/table/Table';
import {useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";

export const Convidados= ()=>{
   //directionar para outra pagina
const history=useNavigate();

function AdicionarC(convidados){
fetch("http:/localhost:5000/convidados",{
  method:"POST",
  headers:{
    'Content-type': 'application/json',
  },
  body:JSON.stringify(convidados)
})
.then((resp)=>resp.json())
.then((data)=>{
  console.log(data)
})
.catch((err)=> console.log(err))

}

  //salvando
  const [adicionar,setAdicionar]=useState()


  //validando form
/*const [user,setUser] = useState({
  name:'',
  email: '',
})

//atualizar message
const [status,setStatus] =useState({
  type:'',
  messagem:''
})


function AdicionarPost(adicionar){
fetch('http://localhost:/5000/adicionar',{
  method: 'POST',
  headers:{
    'Content-type': 'application/json',
  },
  body:JSON.stringify(create),
}
 )
}

//receber dos dados
const InputV=e=>{
  setUser({...user, [e.target.name]: e.target.value})
  setAdiconar({...adicionar, [e.target.value]: e.target.value})
}

//enviar ao back
const addUSer= async e =>{
  e.preventDefault();
handleSubmit(adicionar)
if(!validation()) return;

const savedataForm =true;

if(savedataForm){
  setStatus({
    type:'sucess',
    messagem:"Usuário cadastrado com sucesso"
  });
  setUser({
  name:'',
  email: '',
  password:''
  })
}else{
  setStatus({
    type:'error',
    messagem:"Erro: Usuário não cadastrado com sucesso"
  })
}
}
//função de validação
function validation (){
  if(!user.name)
  return setStatus({
    type:'error',
   messagem: 'Necessário preencher o campo nome'});

   if(!user.email)
   return setStatus({
     type:'error',
    messagem: 'Necessário preencher o campo email'});

   return true;
}
     {status.type==='sucess' ? <p style={{color: 'green'}}>
      {status.messagem}</p> : ''}
    {status.type==='error' ? <p style={{color: '#ff0000'}}>
      {status.messagem}</p> : ''}
*/

    return (
     
        <>
        <h1>Cadastre os convidados</h1>
        <p>Tenha controle sobre eles</p>
   
      <form >

<Inputs 
 name="name" 
 placeholder="Nome completo"
 type="text"
text="Nome"
//value={user.email}
//handleOnChange={InputV}
/>

<Inputs 
 name="email" 
 placeholder="Email"
 type="email"
text="Email"
//value={user.email}
//handleOnChange={InputV}
 />
          <Button text="Enviar" to="/"/>

      </form>

<h2>Convidados</h2>
<Table nome="Lucas" contato="lucas@email.com" />
<Table nome="Pedro" contato="pedro@email.com" />
<Table nome="Carol" contato="carol@email.com" />


        </>
    )
}
