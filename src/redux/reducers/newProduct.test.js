import fetchProductReducer from './newProduct';

describe('fetchProduct Reducer', () => {
  const initialState = {
    data: undefined,
    isLoading: false,
    hasError: false,
  };

  it('returns the initial state when an action type is not passed', () => {
    const reducer = fetchProductReducer(undefined, {});

    expect(reducer).toEqual(initialState);
  });

  it('handles FETCH_NEW_PRODUCT_IS_LOADING as expected', () => {
    const reducer = fetchProductReducer(initialState, {
      type: 'FETCH_NEW_PRODUCT_IS_LOADING',
      payload: true,
    });

    expect(reducer).toEqual({
      data: undefined,
      isLoading: true,
      hasError: false,
    });
  });

  it('handles FETCH_NEW_PRODUCT_SUCCESS as expected', () => {
    const reducer = fetchProductReducer(initialState, {
      type: 'FETCH_NEW_PRODUCT_SUCCESS',
      payload: {
        id: '1',
        name: 'product',
        url: 'some-url',
      },
    });

    expect(reducer).toEqual({
      data: {
        id: '1',
        name: 'product',
        url: 'some-url',
      },
      isLoading: false,
      hasError: false,
    });
  });

  it('handles FETCH_NEW_PRODUCT_FAILURE as expected', () => {
    const reducer = fetchProductReducer(initialState, {
      type: 'FETCH_NEW_PRODUCT_FAILURE',
      payload: {
        code: '404',
        error: 'NOT FOUND',
      },
    });

    expect(reducer).toEqual({
      data: undefined,
      isLoading: false,
      hasError: {
        code: '404',
        error: 'NOT FOUND',
      },
    });
  });
});
