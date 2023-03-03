import React from 'react';

import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {Nav} from "./Nav";

import {Home}  from './pages/home/Home';
import {Login} from './pages/login/Login';
import {Cadastro} from './pages/cadastro/Cadastro';
import {Painel} from './pages/painel/Painel';

import {Bife} from './pages/bife/Bife';
import {Horario} from './pages/horario/Horario';
import {Logistica} from './pages/logistica/Logistica';
import {Tema} from './pages/tema/Tema';
import {Musica} from './pages/musica/Musica';
import {Convidados } from './pages/convidados/Convidados';
import {Endereco } from './pages/endereco/Endereco';


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
<Route path='/convidados' element={<Convidados/>}/>
<Route path='/horario' element={<Horario/>}/>
<Route path='/tema' element={<Tema/>}/>
<Route path='/endereco' element={<Endereco/>}/>
<Route path='/musica' element={<Musica/>}/>
<Route path='/logistica' element={<Logistica/>}/>
<Route path='/bife' element={<Bife/>}/>

    </Routes>
    </BrowserRouter>
  )
}