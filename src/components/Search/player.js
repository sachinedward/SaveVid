 import IconButton from 'material-ui/IconButton';
import React from "react";
import Dialog from 'material-ui/Dialog';
import Icon from 'material-ui/Icon';
import Slide from 'material-ui/transitions/Slide';



 class Player extends React.Component {
  state = {
    open: false,
    url: ''
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
             <IconButton aria-label="Play Video" onClick={() => this.setState({ open: true, url:"https://www.youtube.com/embed/"+this.props.url })}>
                            <Icon>play_circle_filled</Icon>
                        </IconButton>
        <Dialog open={this.state.open} transition={Slide} onRequestClose={this.handleRequestClose} classname="Popover">
              <iframe width="800" height="800" src={this.state.url}></iframe>
        </Dialog>
      </div>
    );
  }
}

export default Player;