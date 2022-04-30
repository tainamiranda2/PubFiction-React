import React from 'react';
import * as C from './styles';
//import {useState} from 'react'
import {Link} from 'react-router-dom';
function Card ({text, to}){
//const [show,setShow]=useState;
return (
    <C.Container>
    <div className='row'>
        <div className='card green'>
               
                <Link to={to}>
                <h2>{text}</h2>
                </Link>
        </div>
    </div>

   
    </C.Container>
)
}

export default Card;