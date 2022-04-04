import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  background: ${(props) => props.theme.backgroundMenu};
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const ContainerMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  height: 100%;

  .list-items{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    height: 100%;

    li{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 30%;
    }
  }

  li a{
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    padding: 15px;
    position: relative;
    font-weight: bold;
    color: ${(props) => props.theme.main.pinkColor}
  }

  li a::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background: ${(props) => props.theme.main.pinkColor};
    transition: all 300ms ease-in-out
  }
  li a:hover::after{
    width: 100%;
    left: 0;
  }

  a:hover{
    background: ${(props) => props.theme.main.pinkHover};
    transition: all 300ms ease-in-out
  }

`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 15%;
  height: 100%;
  font-weight: bold;
  color: ${(props) => props.theme.main.mainBlack};
`;
