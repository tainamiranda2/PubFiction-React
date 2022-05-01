import React from 'react';
import  * as C from  './styles';
//import {Link} from 'react-router-dom';

function Button({ text,handleOnChangeButton}) {
    return (
    <C.Container>
      <button   onClick={handleOnChangeButton}>
        
      {text}
      </button>
      </C.Container>
    )
  }

  export default Button;