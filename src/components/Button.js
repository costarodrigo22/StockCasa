import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 40px;
  border: none;
  background: ${(props) => props.theme.main.pinkColor};
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  font-weight: bold;
  color: #FFFFFF;
  border-radius: 5px;
  transition: background 0.2s ease-in;

  &:hover{
    background: #ec5fa0;
  }

  &:active{
    background: #cc1a6c;
  }

  &[disabled]{
    background: ${(props) => props.theme.main.pinkWeak};
    cursor: default;
  }
`;
