import React from 'react';
import * as C from './style';
import {Link} from 'react-router-dom';

export const Nav =()=>{
  return (
    <>
    <C.Container>
    <ul>
    <li>
    <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/step1">Login</Link>
    </li>
      <li>
    <Link to="/step2">Cadastro</Link>
    </li>
      <li>
    <Link to="/step3">Testar</Link>
    </li>
    </ul>
    </C.Container>
      </>
  )
}