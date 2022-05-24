import React from 'react';
import * as C from './style';
//import {bsPencil, BsFilltras} from 'react-icons/bs';

function Table ({nome,contato,handleRemove}){
    return (
        <C.Container>
        
        <table>

            <tr>
                <th>{nome}</th>
            </tr>

        <td>{contato}</td>
        </table>


        </C.Container>
    )
}

export default Table;