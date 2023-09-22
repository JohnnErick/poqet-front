import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const Input = styled.input`
  border: 1px solid ${({ error }) => error ? 'red' : '#000'};
  color: ${({ error }) => error ? 'red' : '#000'};
  padding: 0 10px;
  width: 100%;
  height: 32px;
  font-size: 16px;
  border-radius: 5px;
`;

export const ErrorLabel = styled.div`
  color: red;
  font-size: 12px;
`;

export const Label = styled.div`
  font-size: 14px;
  margin-bottom: 3px;
`;

