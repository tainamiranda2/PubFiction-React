import styled from 'styled-components';

export  const Container = styled.div`
*{
    justify-content:center;
}
h1{
    color:#4895ff;
    font-weight:bold;
   text-align:center;
}
p{
    color:#000;
    font-weight:bold;
    text-align:center;


}
img{
    display: inline-block;
margin-left:300px;
margin-top:0px;

}
@media (max-width: 600px) {
   
flex-direction: column;

  
  img{
    margin:50px;
  }
}
`;