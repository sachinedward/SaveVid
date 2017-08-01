import React from "react";
import PropTypes from 'prop-types';
import Navbar from '../navbar';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import axios from "axios";

import SearchBody from './searchBody';


class Drop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url : null,
            image: null
        }
        this.drop = this.drop.bind(this);
        this.preventDefault = this.preventDefault.bind(this);
    }

  preventDefault(event) {
    event.preventDefault();
  }


    drop(event) {
        event.preventDefault();

        var data;
        try {
        data = (event.dataTransfer.getData('text'));
        data  = data.split('%%%');
        } catch (e) {
        return;
        }
    this.setState({url: 'https://youtube.com/embed/'+data[0], image: data[1]});    

    }

    saveVideo (params) {
        axios.post("http://localhost:3001/saveVid",{
            url: params.url,
            image: params.image,
            }).then(function(res){
            if(res.data !== false)
                {  alert("Saved");
                } 
            else {alert("Oops");}
            });
    }
  render() {
      var _this = this;
    return (
      <Paper elevation={4} className='drop' onDragOver={this.preventDefault} onDrop={this.drop} style={{height:'80vh', width:'100vh'}}>
         {this.state.url !== null ?
         <div>
            <Typography type="headline" component="h3" >
              Drag and drop here to Change
          </Typography>
          <iframe style={{height:'80vh', width:'100vh'}} src={this.state.url}></iframe> 
          <Button aria-label="Save Video" raised color="primary" onClick={() => _this.saveVideo({url: this.state.url, image : this.state.image})}>
            SAVE
          </Button>
        </div>
          : 
        <Typography type="headline" component="h3" >
          Drag and drop here to play
        </Typography>}

      </Paper>
    );
  }

}

class Body extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                 <Grid container gutter={24}>
                      <Grid item xs={12} sm={4}>
                        <SearchBody/>
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <Drop />
                      </Grid>
                </Grid>
            </div>
        );
    }
}

SearchBody.protoTypes = {
    callback: PropTypes.func,
}



export default Body;