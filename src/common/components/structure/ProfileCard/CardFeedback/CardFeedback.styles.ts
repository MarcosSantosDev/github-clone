import styled, { keyframes } from 'styled-components';

export const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  transition box-shadow 300ms;
  box-shadow: 0px 0px 8px 0px #3f51b5;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  height: 40px;
  width: 40px;
  border: 5px dashed #adbac7;
  border-radius: 100%;
  animation: ${rotate} 4s linear infinite;
`;

export const EmptyContent = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
`;

export const Title = styled.h3`
  font-size: 16px;
`;
