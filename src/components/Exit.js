import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  background: ${(props) => props.theme.main.pinkColor};
  color: ${(props) => props.theme.main.mainWhite};
  border-radius: 50%;
`;
