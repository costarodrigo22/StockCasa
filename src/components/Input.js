import styled from 'styled-components';

export default styled.input`
  width: 100%;
  border: none;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  height: 40px;
  border-radius: 5px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  border: 2px solid #FFFFFF;
  transition: border-color 0.2s ease-in;

  &:focus{
    border-color: ${(props) => props.theme.main.pinkColor};
  }
`;
