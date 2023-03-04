import React from 'react';
import Button from '../../components/button/Button';
import Inputs from '../../components/inputs/Inputs';
export const Logistica=()=>{
    return(
        <div>
            <h2>Organize sua logistica</h2>
          <form>
            <Inputs 
                text="informe a quantidade de cadeira"
                name="cadeiraQTD"
                placeholder="Informe a quantidade de cadeira"
                type="number"
                //value={cadeiraQTD}
                />
                <Inputs 
                text="informe a quantidade de convidados"
                name="convidadosQTD"
                placeholder="Informe a quantidade de convidados"
                type="number"
                //value={convidadosQTD}
                />
                <Inputs 
                text="informe a quantidade de mesas"
                name="mesasQTD"
                placeholder="Informe a quantidade de mesas"
                type="number"
                //value={mesasQTD}
                />
                 <Button text="Enviar" to="/"/>
                                </form>
        </div>
    )
}