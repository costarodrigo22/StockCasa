import styled from 'styled-components';

export const ContainerCart = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  border-bottom: 1.2px solid ${(props) => props.theme.main.mainGray};

  .quantity{
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;

    span{
      color: ${(props) => props.theme.main.pinkColor};
      font-weight: bold;
    }
  }
  .category{
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;

    small{
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      background: ${(props) => props.theme.main.pinkWeak};
      color: ${(props) => props.theme.main.pinkColor};
      font-weight: bold;
      width: 100px;
      height: 30px;
    }
  }
`;
