import React from 'react';
import Button from '../../components/button/Button';
import Inputs from '../../components/inputs/Inputs';
export const Horario=()=>{
    return(
        <div>
            <h2>Agende seu horaŕio</h2>
            <form>
            <Inputs 
                text="informe a hora inicial"
                name="horaInicial"
                placeholder="Informe a hora inicial"
                type="time"
                //value={horaInicia}
                />
                 <Inputs 
                text="informe a hora Final"
                name="horaFinal"
                placeholder="Informe a hora Final"
                type="time"
                //value={horaFina}
                />
  <Button text="Enviar" to="/"/>

            </form>
        </div>
    )
}