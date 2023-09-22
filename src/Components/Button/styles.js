import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 5px;
  border: none;
  padding: 0 15px;
  height: 32px;
  cursor: pointer;
  font-size: 14px;
  transition: .3s;

  &:hover {
    opacity: .8;
  }

  ${({ disabled }) => disabled && `
    opacity: .8;
    cursor: not-allowed;
  `}
`;
