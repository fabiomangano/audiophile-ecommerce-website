import {
  FETCH_NEW_PRODUCT_SUCCESS,
  FETCH_NEW_PRODUCT_FAILURE,
  FETCH_NEW_PRODUCT_IS_LOADING,
} from '../types/newProduct';

const initialState = {
  data: undefined,
  isLoading: false,
  hasError: false,
};

const fetchProduct = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEW_PRODUCT_SUCCESS: {
      return {
        ...state,
        data: action.payload,
      };
    }

    case FETCH_NEW_PRODUCT_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case FETCH_NEW_PRODUCT_FAILURE: {
      return {
        ...state,
        hasError: action.payload,
      };
    }

    default:
      return state;
  }
};

export default fetchProduct;
