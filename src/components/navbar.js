
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import { Link } from 'react-router-dom'
class Navbar extends React.Component {
  endSession(){
    localStorage.removeItem('isLoggedIn');
    window.location = "/";
  }
  render() {
    return(
    <div>
      <AppBar position="static" color="default" style={{marginBottom:'30px'}}>
        <Grid container >
          <Grid item xs={6} sm={11}>
        <Toolbar>
          <Typography type="title" color="inherit">
            saveVid
          </Typography>
            <Link to='/dashboard'><Button>Dashboard</Button></Link>
            <Link to='/search'><Button>Search</Button></Link>
            <Link to='/reduxer'><Button>Watch List</Button></Link>
        </Toolbar>
        </Grid>
        <Grid item xs={6} sm={1}>
            <Button color="contrast" className="redButton" onClick={this.endSession}>Logout</Button>
            </Grid>
        </Grid>
      </AppBar>
    </div>
    );
  }
}

module.exports = Navbar