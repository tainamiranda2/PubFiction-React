import React from 'react';
import * as C from './styles';

function Card ({text}){

return (
    <C.Container>
    <div className='row'>
        <div className='card green'>
                <h2>{text}</h2>
               
        </div>
    </div>

   
    </C.Container>
)
}

export default Card;