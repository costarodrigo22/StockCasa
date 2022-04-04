import PropTypes from 'prop-types';
import { useState } from 'react';
import { ContainerCart } from './styles';

import ButtonCart from '../ButtonCart';

export default function CartProduct({ onAdd }) {
  const [quantityProduct, setQuantityProduct] = useState(0);

  function incrementCart() {
    setQuantityProduct(quantityProduct + 1);
  }
  function decrementCart() {
    const productLength = quantityProduct > 0 ? quantityProduct - 1 : quantityProduct;
    setQuantityProduct(productLength);
  }

  return (
    <ContainerCart className="product">
      <div className="quantity">
        <ButtonCart onClick={() => decrementCart()}>-</ButtonCart>
        <span>{quantityProduct}</span>
        <ButtonCart onClick={() => incrementCart()}>+</ButtonCart>
      </div>
      <div className="category">
        <small>Mantimento</small>
      </div>
    </ContainerCart>
  );
}

CartProduct.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
