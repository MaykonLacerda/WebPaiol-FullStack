import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Wellcome from './pages/Wellcome';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function Routes() {
  return (
      <BrowserRouter>
          <Route path="/" exact component={Wellcome} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
  );
}

export default Routes;
