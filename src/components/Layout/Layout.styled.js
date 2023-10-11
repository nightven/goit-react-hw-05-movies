import styled from  "styled-components";

const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;

margin-top: 20px;
height: 30px;
padding:0 20px;
background-color: #9749c8;
box-shadow: 0px 4px 19px 12px #b2acb6,0px 10px 15px -3px #b2acb6;
`;

const List = styled.ul`
display: flex;
gap: 24px;
a{
  text-decoration: none;
  color: antiquewhite;
  
}
a:visited{
  color: antiquewhite;
  
}
.active{
    border: 1px solid antiquewhite;
  }
`;
export  {Container, List} 