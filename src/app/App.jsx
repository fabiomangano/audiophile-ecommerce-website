import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from '../history';
import store from '../redux/store';
import ScrollToTop from '../routing/scrollToTop';
import Routes from '../routing/routes';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </Router>
    </Provider>
  );
}

export default App;
