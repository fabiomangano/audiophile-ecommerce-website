import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import PageLayout from './layouts/PageLayout';

function App() {
  return (
    <div>
      <Router>
        <PageLayout />
      </Router>
    </div>
  );
}

export default App;
