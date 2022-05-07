import styled from 'styled-components';

export const Container=styled.div`
  *{
    padding:0;
    margin:0;
    box-sizing: border-box;
   
  }
  ul{
    background: #2196f3;
    padding: 20px;
    color:#fff;
    justify-content: center;
    font-size:20px;
  }
  ul li {
    display:inline;
    margin:20px;
  }
  ul li a{
    color:#fff;
    text-decoration:none;
  }
  a:hover{
    background: #000;
    padding:10px;
    color:#fff;
  }
  `;