import { combineReducers } from 'redux';
import newProductReducer from './newProduct';
import productCardListReducer from './product-card-list/productCardList';
import featuredProductsReducer from './featured-products/featuredProducts';

const rootReducer = combineReducers({
  newProduct: newProductReducer,
  featuredProducts: featuredProductsReducer,
  productList: productCardListReducer,
});

export default rootReducer;
