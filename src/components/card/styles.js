import styled from 'styled-components';

export  const Container = styled.div`
 display:inline-flex;
 
.card {
   text-align:center;
    border-radius:5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  padding: 30px;
  margin: 20px;
  width: 200px;
  transition: all 0.3s ease-out;
  background:#4895ff;
  border-left: 3px solid #4895ff;
}
a{
  color:yellow;
  text-decoration:none;
  
}

.card:hover {
  transform: translateY(-5px);
  cursor: pointer;
  background:#fff;
  color:#fff;
  border-left: 3px solid #fff;

}

`;