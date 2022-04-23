import React from 'react';

import {BrowserRouter,Routes, Route} from 'react-router-dom';

import {Login} from './pages/Login';
import {Cadastro} from './pages/Cadastro';
import {Painel} from './pages/Painel';


export const Router=()=>{
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
       <Route path="/step2" element={<Cadastro/>}/>

    <Route path="/step3" element={<Painel/>}/>

    </Routes>
    </BrowserRouter>
  )
}