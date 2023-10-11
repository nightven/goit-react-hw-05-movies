import styled from 'styled-components';

const CatsList = styled.ul`
display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 40px;
  margin-top: 60px;
  margin-bottom: 0;
  padding: 0 16px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  
  `;

const ListItem = styled.li`
padding: 8px;
border: 1px solid #b2acb6;
border-radius: 8px;
background-color: #9749c8;
box-shadow: 0px 4px 19px 12px #b2acb6,0px 10px 15px -3px #b2acb6;
`;
  export {CatsList,ListItem}
