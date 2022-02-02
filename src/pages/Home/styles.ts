import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;

  background-color: ${({ theme }) => theme.backgroundColor};
`;
