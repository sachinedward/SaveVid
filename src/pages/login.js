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

const login__button = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #53d7ff 90%)',
    borderRadius: 3,
    border: 0,
    margin: '16px 0px',
    width: '100%',
    color: 'white',
    height: 30,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)'
};

const other__button = {
    width: '50%'
  };

class Login extends React.Component{

  submitData(event){
    var pwd = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    axios.post("http://localhost:3001/register",{
      email: email,
      password: pwd
    }).then(function( res){
      console(res);
    });
    event.preventDefault();
  }
render() {
  return (
    <div>

      <Card className={card}>

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
              
            <Button type="submit" raised style={login__button}>
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