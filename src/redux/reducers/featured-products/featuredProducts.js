import {
  FETCH_FEATURED_PRODUCTS_SUCCESS,
  FETCH_FEATURED_PRODUCTS_FAILURE,
  FETCH_FEATURED_PRODUCTS_IS_LOADING,
} from '../../types/featuredProducts';

const initialState = {
  data: undefined,
  isLoading: false,
  hasError: false,
};

const fetchFeaturedProducts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FEATURED_PRODUCTS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
      };
    }

    case FETCH_FEATURED_PRODUCTS_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case FETCH_FEATURED_PRODUCTS_FAILURE: {
      return {
        ...state,
        hasError: action.payload,
      };
    }

    default:
      return state;
  }
};

export default fetchFeaturedProducts;
