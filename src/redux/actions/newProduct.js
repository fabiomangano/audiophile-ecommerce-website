import axios from 'axios';

import {
  FETCH_NEW_PRODUCT_IS_LOADING,
  FETCH_NEW_PRODUCT_FAILURE,
  FETCH_NEW_PRODUCT_SUCCESS,
} from '../types/newProduct';

const fetchNewProductIsLoading = (isLoading) => {
  return {
    type: FETCH_NEW_PRODUCT_IS_LOADING,
    payload: isLoading,
  };
};

const fetchNewProductFailure = (error) => {
  return {
    type: FETCH_NEW_PRODUCT_FAILURE,
    payload: error,
  };
};

const fetchNewProductSuccess = (newProduct) => {
  return {
    type: FETCH_NEW_PRODUCT_SUCCESS,
    payload: newProduct,
  };
};

const fetchNewProduct = (url) => {
  return (dispatch) => {
    dispatch(fetchNewProductIsLoading(true));

    axios
      .get(url)
      .then((res) => {
        dispatch(fetchNewProductIsLoading(false));
        dispatch(fetchNewProductSuccess(res.data[0]));
      })
      .catch((error) => {
        dispatch(fetchNewProductIsLoading(false));
        dispatch(fetchNewProductFailure(error));
      });
  };
};

export {
  fetchNewProductIsLoading,
  fetchNewProductSuccess,
  fetchNewProductFailure,
  fetchNewProduct,
};
