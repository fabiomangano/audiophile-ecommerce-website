import {
  FETCH_PRODUCT_CARD_LIST_SUCCESS,
  FETCH_PRODUCT_CARD_LIST_FAILURE,
  FETCH_PRODUCT_CARD_LIST_IS_LOADING,
} from '../../types/productCardList';

const initialState = {
  data: [],
  isLoading: false,
  hasError: false,
};

const fetchProductCardList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_CARD_LIST_SUCCESS: {
      return {
        ...state,
        data: action.payload,
      };
    }

    case FETCH_PRODUCT_CARD_LIST_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case FETCH_PRODUCT_CARD_LIST_FAILURE: {
      return {
        ...state,
        hasError: action.payload,
      };
    }

    default:
      return state;
  }
};

export default fetchProductCardList;
