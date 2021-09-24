import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from '../../__mocks__/axios';

import {
  fetchNewProductIsLoading,
  fetchNewProductFailure,
  fetchNewProductSuccess,
  fetchNewProduct,
} from './newProduct';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('NewProduct actions creator', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      data: undefined,
      isLoading: false,
      hasError: false,
    });
    store.clearActions();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should dispatch correctly success action', () => {
    const fakeProduct = {
      id: '1',
      name: 'product',
      url: 'some-url',
    };

    const expected = {
      type: 'FETCH_NEW_PRODUCT_SUCCESS',
      payload: {
        id: '1',
        name: 'product',
        url: 'some-url',
      },
    };

    store.dispatch(fetchNewProductSuccess(fakeProduct));
    const actions = store.getActions();

    expect(actions).toEqual([expected]);
  });

  it('should dispatch correctly isLoading action', () => {
    const expected = {
      type: 'FETCH_NEW_PRODUCT_IS_LOADING',
      payload: true,
    };

    store.dispatch(fetchNewProductIsLoading(true));
    const actions = store.getActions();

    expect(actions).toEqual([expected]);
  });

  it('should dispatch correctly failure action', () => {
    const fakeError = {
      code: 404,
      error: 'NOT_FOUND',
    };

    const expected = {
      type: 'FETCH_NEW_PRODUCT_FAILURE',
      payload: fakeError,
    };

    store.dispatch(fetchNewProductFailure(fakeError));
    const actions = store.getActions();

    expect(actions).toEqual([expected]);
  });

  it('should dispatch correctly isLoading action', () => {
    const expected = {
      type: 'FETCH_NEW_PRODUCT_IS_LOADING',
      payload: true,
    };

    store.dispatch(fetchNewProductIsLoading(true));
    const actions = store.getActions();

    expect(actions).toEqual([expected]);
  });

  it('should dispatch correctly fetchNewProduct action and returns data on success', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [
          {
            id: '1',
            name: 'product',
            url: 'some-url',
          },
        ],
      }),
    );

    await store.dispatch(fetchNewProduct());
    const actions = store.getActions();

    expect.assertions(3);

    expect(actions[0]).toEqual({
      type: 'FETCH_NEW_PRODUCT_IS_LOADING',
      payload: true,
    });

    expect(actions[1]).toEqual({
      type: 'FETCH_NEW_PRODUCT_IS_LOADING',
      payload: false,
    });

    expect(actions[2]).toEqual({
      type: 'FETCH_NEW_PRODUCT_SUCCESS',
      payload: { id: '1', name: 'product', url: 'some-url' },
    });
  });

  xit('should dispatch correctly fetchNewProduct action and returns an error', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject(
        new Error({
          error: {
            code: 404,
            error: 'NOT_FOUND',
          },
        }),
      ),
    );

    await store.dispatch(fetchNewProduct());
    const actions = store.getActions();

    expect.assertions(3);

    expect(actions[0]).toEqual({
      type: 'FETCH_NEW_PRODUCT_IS_LOADING',
      payload: true,
    });

    expect(actions[1]).toEqual({
      type: 'FETCH_NEW_PRODUCT_IS_LOADING',
      payload: false,
    });

    expect(actions[2]).toEqual({
      type: 'FETCH_NEW_PRODUCT_FAILURE',
      payload: {
        error: {
          code: 404,
          error: 'NOT_FOUND',
        },
      },
    });
  });
});
