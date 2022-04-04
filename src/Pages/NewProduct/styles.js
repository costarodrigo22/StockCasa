import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  height: 430px;

  .back-button{
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    a{
      margin-left: 8px;
      font-weight: bold;
      color: ${(props) => props.theme.main.pinkColor};
    }
  }

  h3{
      color: ${(props) => props.theme.main.mainBlack};
      margin-top: 15px;
      margin-bottom: 15px;
    }
`;
