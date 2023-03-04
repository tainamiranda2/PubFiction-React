import React from 'react';
import Button from '../../components/button/Button';
import Inputs from '../../components/inputs/Inputs';

export const Tema=()=>{
    return(
        <div>
            <h2>Organize seu tema</h2>
            <form>
            <Inputs 
                text="informe o nome do tema"
                name="nomeTema"
                placeholder="Informe o nome do tema"
                type="text"
                //value={nomeTema}
                />
                 <Inputs 
                text="informe a cor do Tema"
                name="corMesa"
                placeholder="Informe a cor do tema"
                type="text"
                //value={nomeTema}
                />
                 <Button text="Enviar" to="/"/>

            </form>
        </div>
    )
}