import styled from 'styled-components';

export const ContainerProducts = styled.div`
  width: 60%;
  height: 500px;
  background: #FFFFFF;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

`;

export const InputSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 15px;

  input{
    width: 60%;
    height: 35px;
    border-radius: 20px;
    border: none;
    background: ${(props) => props.theme.backgroundSearch};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder{
      color: #BCBCBC;
    }
  }
`;

export const ListProducts = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
