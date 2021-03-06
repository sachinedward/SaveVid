import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import 'typeface-roboto';
import { BrowserRouter, Route } from 'react-router-dom'

import Search from './components/Search/SearchComponent';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Register from './components/register';
import Reduxer from './reduxer';

class App extends React.Component {
  componentWillMount(){
      var loc = window.location.href;
  if(loc.indexOf("login")=== -1){
    if(loc.indexOf("register")=== -1){
 if(!localStorage.getItem('isLoggedIn')){
  window.location = "/login";
 }
 }}
  }
render() {
    return(
       <MuiThemeProvider>
          <BrowserRouter >
            <div>
                <Route path="/search" component={Search} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/redux" component={Reduxer} />
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
