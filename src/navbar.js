
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

class Navbar extends React.Component {
  render() {
    return(
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography type="title" color="inherit">
            Title
          </Typography>
            <Button>Dashboard</Button>
            <Button >Search</Button>
        </Toolbar>
      </AppBar>
    </div>
    );
  }
}

module.exports = Navbar