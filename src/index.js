import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider } from 'material-ui/styles';
import 'typeface-roboto';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Search from './pages/search';
import Login from './pages/login';
import Navbar from './navbar';
import Dashboard from './pages/dashboard';

class App extends React.Component {
render() {
    return(
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
    );
  }
}


ReactDOM.render(
       <App />        
         ,
  document.getElementById('root')
);
