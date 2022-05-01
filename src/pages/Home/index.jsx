import React from  'react';
import Photo from './img1.png';
import * as C from './style';

export const Home=()=>{
    return (
        <C.Container>
       
        <h1>Leve sua festa a outro patamar com pub fiction.</h1>
        <p>Aposte em eventos personalizados e tenha tempo para seus convidados.</p>
        <img src={Photo} alt="imagem de bonecos"/>
        </C.Container>
    )
}