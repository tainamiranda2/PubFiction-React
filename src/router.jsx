import React from 'react';

import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {Nav} from "./Nav"

import {Home}  from './pages/Home.jsx'
import {Login} from './pages/Login';
import {Cadastro} from './pages/Cadastro';
import {Painel} from './pages/Painel';

export const Router=()=>{
  return (
    <BrowserRouter>
         <Nav/>

    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path="/step1" element={<Login/>}/>
       <Route path="/step2" element={<Cadastro/>}/>

    <Route path="/step3" element={<Painel/>}/>

    </Routes>
    </BrowserRouter>
  )
}