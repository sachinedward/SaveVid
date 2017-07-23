import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider } from 'material-ui/styles';
import 'typeface-roboto';
import { BrowserRouter, Route } from 'react-router-dom'

import Search from './pages/search';
import Login from './pages/login';
import Navbar from './navbar';
import Dashboard from './pages/dashboard';

class Body extends React.Component {
render() {
    return(
      <div>
          {this.props.children}
</div>
    );
  }
}

class App extends React.Component {
  render() {
    return(
         <Body >
          <Login />
         </Body>

    );
  }

}


ReactDOM.render(
        <MuiThemeProvider>
          <BrowserRouter >
            <div>
                <Route path="/search" component={Search} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                {/*<Route path={"register"} component = {Register} />*/}
           </div>
         </BrowserRouter>
      </MuiThemeProvider>         
         ,
  document.getElementById('root')
);
