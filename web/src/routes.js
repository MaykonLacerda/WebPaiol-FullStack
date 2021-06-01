import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import FirstPage from './pages/FirstPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function Routes() {
  return (
      <BrowserRouter>
          <Route path="/" exact component={FirstPage} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
  );
}

export default Routes;
