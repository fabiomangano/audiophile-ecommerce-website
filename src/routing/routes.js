import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Category from '../pages/category/Category';
import Product from '../pages/product/Product';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/category/:categoryName',
    component: Category,
    exact: true,
  },
  {
    path: '/category/:categoryName/product/:productId',
    component: Product,
  },
];

const Routes = () => {
  return (
    <Switch>
      {routes.map(({ path, component, exact }) => {
        return (
          <Route key={path} path={path} exact={exact} component={component} />
        );
      })}
    </Switch>
  );
};

export default Routes;
