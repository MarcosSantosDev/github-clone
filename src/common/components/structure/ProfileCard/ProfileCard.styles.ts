import styled from 'styled-components';

export const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 120px;
  column-gap: 20px;
  justify-content: flex-start;
  align-items: center;

  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  transition box-shadow 300ms;
  box-shadow: 0px 0px 8px 0px #3f51b5;

  :hover {
    box-shadow: 0px 0px 8px 2px #3f51b5;
  }
`;

export const ProfileImg = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 100%;
  border: 2px solid #adbac7;
`;

export const ProfileInformationDiv = styled.div`
  h4 {
    margin: 0px;
    font-size: 16px;
    color: #fff;
  }

  p {
    font-size: 14px;
    font-weight: bold;
    color: #ddd;
  }
`;
