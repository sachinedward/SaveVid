
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'
class Navbar extends React.Component {
  render() {
    return(
    <div>
      <AppBar position="static" color="default" style={{marginBottom:'30px'}}>
        <Toolbar>
          <Typography type="title" color="inherit">
            Title
          </Typography>
            <Button><Link to='/dashboard'>Dashboard</Link></Button>
            <Button><Link to='/search'>Search</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
    );
  }
}

module.exports = Navbar