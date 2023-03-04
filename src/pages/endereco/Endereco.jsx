import React from 'react';
import Button from '../../components/button/Button';
import Inputs from '../../components/inputs/Inputs';
export const Endereco=()=>{
    return(
        <div>
            <h2>Organize seu endereço</h2>
            <form>
                <Inputs 
                text="informe o nome da rua"
                name="rua"
                placeholder="Informe o nome da rua"
                type="text"
                //value={rua}
                />
                 <Inputs 
                text="informe o nome da rua"
                name="bairro"
                placeholder="Informe o nome do bairro"
                type="text"
                //value={bairro}
                />
                 <Inputs 
                text="informe o nome da cidade"
                name="cidade"
                placeholder="Informe o nome da cidade"
                type="text"
                //value={cidade}
                />
                <Inputs 
                text="informe o nome do Estado"
                name="estado"
                placeholder="Informe o nome da estado"
                type="text"
                //value={estado}
                />
                <Inputs 
                text="informe o nome da complemento"
                name="complemento"
                placeholder="Informe o nome da complemento"
                type="text"
                //value={complemento}
                />
                <Inputs 
                text="informe o numéro da casa"
                name="numeroCasa"
                placeholder="Informe o número da casa"
                type="text"
                //value={numeroCasa}
                />
                <Button text="Enviar" to="/"/>
            </form>
        </div>
    )
}