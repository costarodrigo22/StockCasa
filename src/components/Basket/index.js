import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Container } from './styles';

import ButtonCart from '../ButtonCart';
import ButtonPayment from '../ButtonPayment';

import { ProductsContext } from '../../ProductsContext/index';

export default function Basket({
  cartItems, onAdd, onRemove,
}) {
  const { onRequestProduct } = useContext(ProductsContext);

  return (
    <Container>
      <div className="title-request">
        <h4>Requisição</h4>
      </div>
      <div className="product-cart-empty">
        {cartItems.length === 0 && <div>Carrinho vazio</div>}
      </div>
      <div className="content">
        {cartItems.map((item) => (
          <div className="product-cart" key={item.id}>
            <div className="quantity">
              <ButtonCart onClick={() => onRemove(item)}>-</ButtonCart>
              <span>{item.quantityCart}</span>
              <ButtonCart onClick={() => onAdd(item)}>+</ButtonCart>
            </div>
            <div className="category">
              <small>{item.description}</small>
            </div>
          </div>
        ))}
      </div>
      <div className="finish-request">
        <div>
          Total:
          {cartItems.length}
        </div>
        {cartItems.length >= 1
          && <ButtonPayment onClick={() => onRequestProduct(cartItems)}>Finalizar</ButtonPayment>}
      </div>
    </Container>
  );
}

Basket.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      category: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
    }),
  ).isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
