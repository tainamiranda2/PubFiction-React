import React from 'react';
import * as C from './style';

export const Nav =()=>{
  return (
    <>
    <C.Container>
    <ul>
    <li>
    <a href="/">Login</a>
    </li>
      <li>
    <a href="step2">Cadastro</a>
    </li>
      <li>
    <a href="step3">Testar</a>
    </li>
    </ul>
    </C.Container>
      </>
  )
}