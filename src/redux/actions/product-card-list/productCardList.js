import axios from 'axios';

import {
  FETCH_PRODUCT_CARD_LIST_IS_LOADING,
  FETCH_PRODUCT_CARD_LIST_FAILURE,
  FETCH_PRODUCT_CARD_LIST_SUCCESS,
} from '../../types/productCardList';

const fetchProductCardListIsLoading = (isLoading) => {
  return {
    type: FETCH_PRODUCT_CARD_LIST_IS_LOADING,
    payload: isLoading,
  };
};

const fetchProductCardListFailure = (error) => {
  return {
    type: FETCH_PRODUCT_CARD_LIST_FAILURE,
    payload: error,
  };
};

const fetchProductCardListSuccess = (productList) => {
  return {
    type: FETCH_PRODUCT_CARD_LIST_SUCCESS,
    payload: productList,
  };
};

const fetchProductCardList = (url) => {
  return (dispatch) => {
    dispatch(fetchProductCardListIsLoading(true));

    axios
      .get(url)
      .then((res) => {
        dispatch(fetchProductCardListIsLoading(false));
        dispatch(fetchProductCardListSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchProductCardListIsLoading(false));
        dispatch(fetchProductCardListFailure(error));
      });
  };
};

export {
  fetchProductCardListIsLoading,
  fetchProductCardListSuccess,
  fetchProductCardListFailure,
  fetchProductCardList,
};
