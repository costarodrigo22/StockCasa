import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Products from './Pages/Products';
import NewProduct from './Pages/NewProduct';
import EditProducts from './Pages/Editproducts';
import RequestProduct from './Pages/RequestProduct';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/newProduct" component={NewProduct} />
      <Route path="/edit/:id" component={EditProducts} />
      <Route path="/request" component={RequestProduct} />
    </Switch>
  );
}
