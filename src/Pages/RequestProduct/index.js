import { useState, useContext } from 'react';
import {
  ContainerProducts, InputSearchContainer, ListProducts,
} from './styles';

import Centralizer from '../../components/Centralizer';
import Product from '../../components/Product';

import edit from '../../assets/images/edit.svg';
import del from '../../assets/images/del.svg';
import Basket from '../../components/Basket';

import { ProductsContext } from '../../ProductsContext/index';

export default function RequestProduct() {
  const { listProducts } = useContext(ProductsContext);
  const [cartItems, setCartItems] = useState([]);

  // Adiciona item ao carrinho
  function handleAddToCart(product) {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((cart) => (cart.id === product.id
          ? {
            ...exist,
            quantityCart: exist.quantityCart < product.quantity
              ? exist.quantityCart + 1 : product.quantity,
          } : cart)),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantityCart: 1 }]);
    }
  }

  // Remove itens do carrinho
  function handleRemove(product) {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.quantityCart === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((cart) => (cart.id === product.id
          ? { ...exist, quantityCart: exist.quantityCart - 1 } : cart)),
      );
    }
  }

  return (
    <Centralizer>
      <ContainerProducts>
        <InputSearchContainer>
          <input type="text" placeholder="Digite o nome do produto" />
        </InputSearchContainer>
        <ListProducts>
          {
            listProducts.map((item) => (
              <Product key={item.id}>
                <div className="product-name">
                  <strong>{item.description}</strong>
                  <small>{item.category}</small>
                </div>
                <div className="container-info">
                  <div className="infos">
                    <span>{item.quantity}</span>
                    <span>{item.price}</span>
                  </div>
                  <div className="buttons">
                    <button className="add-to-cart" onClick={() => handleAddToCart(item)} type="button">+</button>
                    <img src={edit} alt="botão de editar" />
                    <img src={del} alt="botão de deletar" />
                  </div>
                </div>
              </Product>
            ))
          }
        </ListProducts>
      </ContainerProducts>

      <Basket
        onAdd={handleAddToCart}
        onRemove={handleRemove}
        cartItems={cartItems}
      />
    </Centralizer>
  );
}
