import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import FirstPage from './pages/FirstPage';
import Login from './pages/Login';
import Home from './pages/Home';

function Routes() {
  return (
      <BrowserRouter>
          <Route path="/" exact component={FirstPage} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
      </BrowserRouter>
  );
}

export default Routes;
