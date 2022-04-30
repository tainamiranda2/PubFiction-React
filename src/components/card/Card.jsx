import React from 'react';
import * as C from './styles';
//import {useState} from 'react'

function Card ({text}){
//const [show,setShow]=useState;
return (
    <C.Container>
    <div className='row'>
        <div className='card green'>
                <h2>{text}</h2>
               
        </div>
{/*<button>{abrir}</button>*/}
    </div>

   
    </C.Container>
)
}

export default Card;