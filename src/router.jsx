import React from 'react';

import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {Nav} from "./Nav";

import {Home}  from './pages/Home';
import {Login} from './pages/Login';
import {Cadastro} from './pages/Cadastro';
import {Painel} from './pages/Painel';

import {Convidados} from './Config/convidados'
export const Router=()=>{
  return (
    <BrowserRouter>
         <Nav/>

    <Routes>
{/*Rotas das páginas */}

    <Route path='/' element={<Home/>}/>
    <Route path="/step1" element={<Login/>}/>
    <Route path="/step2" element={<Cadastro/>}/>
    <Route path="/step3" element={<Painel/>}/>
{/*Rotas de configurações */}
<Route path='/step4' element={<Convidados/>}/>
    </Routes>
    </BrowserRouter>
  )
}