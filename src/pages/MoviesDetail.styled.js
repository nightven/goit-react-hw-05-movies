import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  padding-top: 16px;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  max-width: 110px;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid #b2acb6;
  border-radius: 8px;
  background-color: #9749c8;
  padding-left: 16px;
  box-shadow: 0px 4px 19px 12px #b2acb6, 0px 10px 15px -3px #b2acb6;

  a {
    text-decoration: none;
    color: antiquewhite;
  }
  a:visited {
    color: antiquewhite;
  }
  .active {
    border: 1px solid antiquewhite;
  }
`;

const DetailWrap = styled.div`
  display: flex;
  gap: 24px;
  padding: 16px;
  background-color: #9749c8;
  box-shadow: 0px 4px 19px 12px #b2acb6, 0px 10px 15px -3px #b2acb6;
`;

const ImageWrap = styled.div`
  width: 600px;
`;

const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin-top: 70px;
  padding: 16px;
`;

const ButtonsList = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
  margin-top: auto;
  list-style-type: none;
  a {
    text-decoration: none;
    color: antiquewhite;
  }
  a:visited {
    color: antiquewhite;
  }
  .active {
    border: 1px solid antiquewhite;
  }
  
`;
export {
  Container,
  ButtonWrapper,
  DetailWrap,
  ImageWrap,
  Descriptions,
  ButtonsList,
};
