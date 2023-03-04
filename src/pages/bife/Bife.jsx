import React from 'react';
import Button from '../../components/button/Button';
import Inputs from '../../components/inputs/Inputs';
export const Bife=()=>{
    return(
        <div>
            <h2>Organize seu bife</h2>
            <form>
            <Inputs
          
            text="Prato principal"
            type="text"
            placeholder="Informe o prato principal"
            />
             <Inputs
             text="Quantidade de prato de principal"
            type="number"
            placeholder="Informe a quantidade prato de entrada"
            />
<br/>
            <Inputs
             text="Prato de entrada"
            type="text"
            placeholder="Informe o prato de entrada"
            />
            <Inputs
             text="Quantidade de prato de entrada"
            type="number"
            placeholder="Informe a quantidade prato de entrada"
            />
            <Inputs
             text="Opção de lanche 1"
            type="text"
            placeholder="Informe a primeira opção de lanche"
            />
          <Inputs
             text="Quantidade de lanche 1"
            type="number"
            placeholder="Informe a quantidade de lanche"
            />
            <Inputs
            text="Opção de lanche 2"
            type="text"
            placeholder="Informe a segunda opção de lanche"
            />
              <Inputs
             text="Quantidade de lanche 2"
            type="number"
            placeholder="Informe a quantidade de lanche"
            />
              <Inputs
                text="Opção de lanche 3"
            type="text"
            placeholder="Informe a terceira opção de lanche"
            />
              <Inputs
             text="Quantidade de lanche 3"
            type="number"
            placeholder="Informe a quantidade de lanche"
            />
                <Inputs
                  text="Opção de bebida 1"
            type="text"
            placeholder="Informe a primeira opção de bebida"
            />
              <Inputs
             text="Quantidade de bebida 1"
            type="number"
            placeholder="Informe a quantidade de bebida"
            />
             <Inputs
               text="Opção de bebida 2"
            type="text"
            placeholder="Informe a seegunda opção de bebida"
            />
    <Inputs
             text="Quantidade de bebida 2"
            type="number"
            placeholder="Informe a quantidade de bebida"
            />
            <Button text="Enviar" to="/"/>
            </form>
        </div>
    )
}