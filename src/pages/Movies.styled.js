import styled from 'styled-components';

const Container = styled.div`
display:flex;
  max-width: 1200px;
  padding-top: 16px;
  margin: 0 auto;
`;

const InputSearch = styled.input`
padding: 16px;
width: 100%;
height: 24px;
margin: 0 auto;
margin-bottom: 40px;
border: 1px solid #b2acb6;
border-radius: 8px;
background-color: #9749c8;
color: white;

box-shadow: 0px 4px 19px 12px #b2acb6,0px 10px 15px -3px #b2acb6;
`;

export   {Container, InputSearch} ;