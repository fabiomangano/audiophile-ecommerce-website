import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import mockAxios from '../../../../__mocks__/axios';
import NewProduct from './NewProduct';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe.skip('My Connected React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      data: undefined,
      isLoading: false,
      hasError: false,
    });

    component = renderer.create(
      <Provider store={store}>
        <NewProduct />
      </Provider>,
    );
  });

  xit('should render with given state from Redux store', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [
          {
            id: '1',
            name: 'product',
            url: 'some-url',
            description: 'some-description',
          },
        ],
      }),
    );
  });

  it('should dispatch an action on button click', () => {});
});
