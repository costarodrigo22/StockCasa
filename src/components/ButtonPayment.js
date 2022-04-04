import styled from 'styled-components';

export default styled.button`
  width: 200px;
  height: 30px;
  background: ${(props) => props.theme.main.pinkColor};
  margin-top: 20px;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  transition: background 0.2s ease-in;

  &:hover{
    background: #ec5fa0;
  }

  &:active{
    background: #cc1a6c;
  }
`;
