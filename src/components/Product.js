import styled from 'styled-components';

export default styled.div`
  width: 220px;
  height: 110px;
  background: ${(props) => props.theme.backgroundCard};
  border-radius: 5px;
  padding: 10px;

  .product-name{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  strong{
    color: ${(props) => props.theme.main.mainBlack};
  }

  small{
    background: ${(props) => props.theme.main.pinkWeak};
    color: ${(props) => props.theme.main.pinkColor};
    font-weight: bold;
    text-transform: uppercase;
    padding: 4px;
    border-radius: 5px;
  }
  span{
    display: block;
    font-size: 14px;
    color: ${(props) => props.theme.main.mainGray};
    margin-top: 5px;
  }

  .container-info{
    display: flex;
    justify-content: space-between;
  }
  .container-info .infos{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .container-info .infos .add-to-cart{
    border: none;
    background: transparent;
    width: 80%;
  }

  .buttons{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    button{
      width: 15px;
      border-radius: 5px;
      border: none;
      background: transparent;
      font-weight: bold;
      color: ${(props) => props.theme.main.mainAdd};
      font-size: 16px;
    }
    button:hover{
      background: ${(props) => props.theme.main.mainAddHover};
    }

    img{
      margin-left: 15px;
    }
  }
`;
