import React from 'react';
import  * as C from  './styles';
import {Link} from 'react-router-dom';

function Button({to, text}) {
    return (
    <C.Container>
      <Link to={to}>
        
      {text}
      </Link>
      </C.Container>
    )
  }

  export default Button;