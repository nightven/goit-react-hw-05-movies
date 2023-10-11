import styled from 'styled-components';

const ListItem = styled.li`
  padding: 10px;
  background-color: #9749c8;
  color: black;
  border: 1px solid #b2acb6;
  box-shadow: 0px 4px 19px 12px #b2acb6,0px 10px 15px -3px #b2acb6;
  img{
    margin:0 auto;
  }

  .title:visited {
    text-decoration: none;
    color: red;
  }
  &:hover,
  :focus {
    scale: 1.05;
  
  }
`;

export default ListItem;
