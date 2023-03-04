import React from 'react';
import Button from '../../components/button/Button';
import Inputs from '../../components/inputs/Inputs';
export const Musica=()=>{
    return(
        <div>
            <h2>Agende sua música</h2>
           <form>
            <Inputs 
                text="informe o nome da banda ou cantor"
                name="banda"
                placeholder="Informe o nome da banda ou cantor"
                type="number"
                //value={rua}
                />
 <Inputs 
                text="informe a quantidade de hora que a banda ou cantor"
                name="horaCantada"
                placeholder="Informe a quantidade de hora que a  da banda ou cantor"
                type="text"
                //value={horaCatada}
                />
  <Button text="Enviar" to="/"/>
  </form>
        </div>
    )
}