import React from 'react';
import * as C from './style';

function Table ({nome,contato}){
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