import React from 'react';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';

import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Navbar from './navbar';
import axios from "axios";
import Dialog from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

var Data = {} 


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
             <IconButton aria-label="Play Video" onClick={() => this.setState({ open: true, url:this.props.url })}>
                            <Icon>play_circle_filled</Icon>
                        </IconButton>
        <Dialog open={this.state.open} transition={Slide} onRequestClose={this.handleRequestClose} classname="Popover">
              <iframe width="800" height="800" src={this.state.url}></iframe>
        </Dialog>
      </div>
    );
  }
}


class CardList extends React.Component {

componentWillMount(){
axios.get('http://localhost:3001/getVid')
  .then(function (response) {
    Data = response.data;
  })
  .catch(function (error) {
    console.log(error);
  });

}

deleteVideo(params) {
axios.post("http://localhost:3001/deleteVid",{
      id: params,
    }).then(function(res){
      if(res !== false)
      {  alert("Deleted");
       } 
       else {alert("Oops");}
    });
    this.forceUpdate();
}

    list = () => Object.keys(Data).map((key,index) => {
        return(
             <Grid item xs={3} sm={2} key={index}>
                <Card >
                    <CardContent>
                        <CardMedia>
                            <img
                                src={Data[key].image}
                                alt="Thumbnail"
                                style={{
                                width: '100%'
                            }}/>
                        </CardMedia>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="Delete Video" onClick={() => this.deleteVideo(Data[key]._id)}>
                            <Icon>delete</Icon>
                        </IconButton>
                        <Player url={Data[key].url}/>   
                    </CardActions>
                </Card>
            </Grid> );
    });
    render() {
        return (
            <Grid container gutter={24}>
           {this.list()}
           </Grid>
        );
    }
}
class Container extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <CardList></CardList>
            </div>
        );
    }
}

class Dashboard extends React.Component {
    render() {
        return (
            <Container></Container>
        );
    }
}

export default Dashboard;