import axios from 'axios';

import {
  FETCH_FEATURED_PRODUCTS_IS_LOADING,
  FETCH_FEATURED_PRODUCTS_FAILURE,
  FETCH_FEATURED_PRODUCTS_SUCCESS,
} from '../../types/featuredProducts';

const fetchFeaturedProductsIsLoading = (isLoading) => {
  return {
    type: FETCH_FEATURED_PRODUCTS_IS_LOADING,
    payload: isLoading,
  };
};

const fetchFeaturedProductsFailure = (error) => {
  return {
    type: FETCH_FEATURED_PRODUCTS_FAILURE,
    payload: error,
  };
};

const fetchFeaturedProductsSuccess = (newProduct) => {
  return {
    type: FETCH_FEATURED_PRODUCTS_SUCCESS,
    payload: newProduct,
  };
};

const fetchFeaturedProducts = (url) => {
  return (dispatch) => {
    dispatch(fetchFeaturedProductsIsLoading(true));

    axios
      .get(url)
      .then((res) => {
        dispatch(fetchFeaturedProductsIsLoading(false));
        dispatch(fetchFeaturedProductsSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchFeaturedProductsIsLoading(false));
        dispatch(fetchFeaturedProductsFailure(error));
      });
  };
};

export {
  fetchFeaturedProducts,
  fetchFeaturedProductsSuccess,
  fetchFeaturedProductsFailure,
  fetchFeaturedProductsIsLoading,
};
