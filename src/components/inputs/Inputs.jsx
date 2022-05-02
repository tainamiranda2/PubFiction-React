import React from 'react';
import * as C from './style';
function Inputs({text,placeholder, type, name}){
    return(
        <C.Container>
                <label  htmlFor={name}>
                    {text}
                </label>
                <input
                 type={type}
                 name={name}
                placeholder={placeholder}/>
                
            
        </C.Container>
    )
}

export default Inputs;