import React from 'react';
import {useState} from 'react';

import Button from '../../components/button/Button';
import Inputs from '../../components/inputs/Inputs';
import * as C from './style';

export const Login=()=>{
 
//validando form
const [user,setUser] = useState({
  name:'',
  email: '',
  password:''
})

//atualizar message
const [status,setStatus] =useState({
  type:'',
  messagem:''
})

//receber dos dados
const InputV=e=>
 setUser({...user, [e.target.name]: e.target.value})

//enviar ao back
const addUSer= async e =>{
  e.preventDefault();
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

    if(!user.password)
    return setStatus({
      type:'error',
     messagem: 'Necessário preencher o campo senha'});

   return true;
}


  return (
    <C.Container>
       <h1>Faça login e aproveite a plataforma.</h1>

    {status.type==='sucess' ? <p style={{color: 'green'}}>
      {status.messagem}</p> : ''}
    {status.type==='error' ? <p style={{color: '#ff0000'}}>
      {status.messagem}</p> : ''}
    <form  onSubmit={addUSer}> 

    <Inputs 
 name="name" 
 placeholder="Nome completo"
 type="text"
text="Nome"
value={user.name}
handleOnChange={InputV}
 />

<Inputs 
 name="email" 
 placeholder="Email"
 type="email"
text="Email"
value={user.email}
handleOnChange={InputV}
 />


<Inputs 
 name="password" 
 placeholder="Senha"
 type="password"
text="Senha"
handleOnChange={InputV}
value={user.password}
 />


<Button to="/" text="Enviar"/>
</form>
    </C.Container>
  )
}
