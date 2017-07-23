import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider } from 'material-ui/styles';
import 'typeface-roboto';

import Search from './pages/search';
import Login from './pages/login';
import Navbar from './navbar';
import Dashboard from './pages/dashboard';

const App = () => (
  <MuiThemeProvider>
    <Login />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
