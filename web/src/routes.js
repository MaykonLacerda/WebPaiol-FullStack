import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StoreProvider from './components/Store/Provider'
import RoutesPrivate from './components/Routes/Private/Private'

import Wellcome from './pages/Wellcome';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function Routes() {
  return (
      <StoreProvider>
          <BrowserRouter>
            <Route path="/" exact component={Wellcome} />
            <Route path="/login" component={Login} />
            <RoutesPrivate path="/dashboard" component={Dashboard} />
        </BrowserRouter>
      </StoreProvider>
  );
}

export default Routes;
