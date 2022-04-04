import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 20%;
  height: 500px;
  padding: 15px;
  border-radius: 5px;
  margin-left: 30px;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  .title-request{
    width: 100%;
    h4{
      color: ${(props) => props.theme.main.mainBlack};
    }
  }

  .product-cart-empty{
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.main.mainBlack};
    width: 100%;
    height: 30px;
    border-bottom: 1.2px solid ${(props) => props.theme.main.mainGray};
  }

  .content{
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .product-cart{
    display: flex;
    width: 100%;
    height: 50px;
    border-bottom: 1.2px solid ${(props) => props.theme.main.mainGray};
    overflow: auto;

  }

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
