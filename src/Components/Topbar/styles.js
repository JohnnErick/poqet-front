import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px 20px 20px 0;
  box-shadow: 0px 14px 7px -15px #111;  
  margin-bottom: 30px;
`;

export const Pokelogo = styled.img`
  width: 30px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 20px;
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  bottom:0;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 24px;
    cursor: pointer;
  }
`;
