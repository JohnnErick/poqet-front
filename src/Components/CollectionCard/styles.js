import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: calc(50% - 10px);
  padding: 10px;
  margin-bottom: 20px;
  background-color: #faf8f7;
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
  border-radius: 5px;

  &:nth-child(odd) {
    margin-right: 20px;
  }
`;

export const Cover = styled.div`
  width: 30%;
  padding-top: 30%;
  margin-right: 5%;
  background-image: url(${({src}) => src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Price = styled.span`
  padding: 5px;
  color: ${({ type }) => type === 'minor' ? 'green' : 'red' }
`;

export const PriceRef = styled.div`
  margin-left: auto;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: green;
  color: #fff;
  align-self: flex-end;
  cursor: pointer;

  &:hover {
    opacity: .8;
    transition: .3s;
  }
`;
