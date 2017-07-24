import React from 'react';
// import PropTypes from 'prop-types';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import axios from "axios";

const card = {
    maxWidth: 345,
    height: 320,
    margin: 'auto',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute'
  };


const other__button = {
    width: '50%'
  };

class Login extends React.Component{

  submitData(event){
    var pwd = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    axios.post("http://localhost:3001/login",{
      email: email,
      password: pwd
    }).then(function(res){
      if(res.data !== false)
      {  //document.cookie = "email="+res.data;
          localStorage.setItem('isLoggedIn', true);
            window.location = "/search";
       } 
       else {alert("Invalid Login Attempt");}
    });
    event.preventDefault();        
  }

render() {
  return (
    <div>

      <Card style={card}>

        <CardContent>
          <Typography type="headline" component="h2">
            Login
          </Typography>

          <form onSubmit={this.submitData.bind(this)}> 
            <TextField
              id="email"
              label="Enter your Email"
              fullWidth
              margin="normal"
              type="email"/>
            <TextField
              id="password"
              label="Enter your Password"
              fullWidth
              margin="normal"
              type="password"/>
              
            <Button type="submit" raised className="login__button">
              Login
            </Button>
          </form>
        </CardContent>

        <CardActions>
          <Button style={other__button}>
            <Typography type="caption" gutterBottom align="center">
              New User? Signup
            </Typography>
          </Button>

          <Button style={other__button}>
            <Typography type="caption" gutterBottom align="center">
              Forgot Password?
            </Typography>
          </Button>
        </CardActions>

      </Card>
    </div>
  );
}}

// Login.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default Login;