import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  height: 100%;

  .title-header{
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-bottom: 20px;

    p{
      color: ${(props) => props.theme.main.mainBlack};
      font-weight: bold;
    }
  }

  .contaier-content{
    display: flex;
    width: 100%;
    height: 75%;

    .infos{
      width: 50%;
      background: ${(props) => props.theme.main.mainWhite};
      box-shadow: 0.5px 4px 10px rgba(0, 0, 0, 0.06);
      border-radius: 5px;
      padding: 0 15px 0 15px;

      .next-items button:first-child img{
        transform: rotate(180deg);
      }
      .next-items button{
        background: transparent;
        border: none;
      }
    }

    .infos .products{
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
      gap: 20px;
    }

    .infos .products{
      margin-top: 20px;
    }

    .infos .next-items{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;

      p{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: ${(props) => props.theme.main.pinkHover};
        color: ${(props) => props.theme.main.pinkColor};
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .actions{
      width: 50%;
      border-radius: 5px;
      padding: 0 70px 0 70px;
    }

    .actions .content-actions{
      height: 100%;
    }

    .actions .content-actions .cards-actions{
      display: flex;
      justify-content: space-between;
      width: 100%;

      .quantity{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        width:100px;
        height: 120px;
      }

      .quantity div{
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        border: 3px solid ${(props) => props.theme.main.pinkColor};
        width: 100%;
        height: 120px;
        margin-bottom: 6px;

      }

      .quantity span{
        color: ${(props) => props.theme.main.mainBlack};
        font-weight: bold;
      }
    }

    //Card de configuração de produtos
    .actions .content-actions .search-products{
      width: 100%;
      background: ${(props) => props.theme.main.mainWhite};
      margin-top: 26px;
      height: 125px;
      border-radius: 5px;
      box-shadow: 0.5px 4px 10px rgba(0, 0, 0, 0.06);
      padding: 17px;

      .description {
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
      }
      .description span{
        color: ${(props) => props.theme.main.mainBlack};
        margin-bottom: 10px;
      }
      .config-products{
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .config-products a{
        color: ${(props) => props.theme.main.pinkColor};
        font-weight: bold;
      }
    }
    .search-products:hover{
      transform: scale(1.05);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }

    //Card de adição de produtos
    .actions .content-actions .add-products{
      width: 100%;
      background: ${(props) => props.theme.main.mainWhite};
      margin-top: 26px;
      height: 125px;
      border-radius: 5px;
      box-shadow: 0.5px 4px 10px rgba(0, 0, 0, 0.06);
      padding: 17px;

      .description{
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
      }
      .description span{
        color: ${(props) => props.theme.main.mainBlack};
        margin-bottom: 10px;
      }
      .description .warning{
        font-size: 10px;
        color: #A6A6A6;
      }

      .add{
        display: flex;
        align-items: center;
        justify-content: space-between;

        a{
          color: ${(props) => props.theme.main.pinkColor};
          font-weight: bold;
        }

      }
    }
    .add-products:hover{
      transform: scale(1.05);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
  }
`;

export const InputSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 15px;

  input{
    width: 100%;
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

export const Card = styled.div`
  background: ${(props) => props.theme.backgroundCard};
  height: 120px;
  padding: 10px;
  border-radius: 5px;

  .product-name{
    display: flex;
    justify-content: space-between;
    align-items: center;

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
  }

  span{
    display: block;
    font-size: 14px;
    color: ${(props) => props.theme.main.mainGray};
    margin-top: 10px;
  }
`;
