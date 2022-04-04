import PropTypes from 'prop-types';
import { useState, createContext } from 'react';

import productsList from '../mocks/products';

export const ProductsContext = createContext();

export function ProductProvider({ children }) {
  // 'product' é meu array de produtos no estoque
  const [products, setProducts] = useState(productsList);

  function handleRequestProduct(itemsBasket) {
    itemsBasket.map((item) => {
      setProducts((prevProducts) => prevProducts.map((product) => {
        if (item.id === product.id) {
          return {
            ...product,
            quantity: product.quantity - item.quantityCart,
          };
        }
        return product;
      }));
      return item;
    });
  }

  return (
    <ProductsContext.Provider
      value={{
        listProducts: products,
        onRequestProduct: handleRequestProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
