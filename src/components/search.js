import React from "react";
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Navbar from './navbar';
import Button from 'material-ui/Button';
import axios from "axios";
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';

import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import { CircularProgress } from 'material-ui/Progress';
import Dialog from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

class SearchBar extends React.Component {

    searchYoutube(event) {
        var searched = document
            .getElementById("search")
            .value;
        let _this = this;
        this.props.callback("loading",false);
        if (searched.length > 0) {
            axios
                .get("http://localhost:3001/search?name=" + searched)
                .then(function (response) {
                    _this
                        .props
                        .callback(response.data,true);
                });

        }
    }

    render() {
        return (
            <div className="searchContainer">
                <TextField id="search" label="Search" margin="normal" fullWidth/>
                <Button
                    className="login__button"
                    raised
                    onClick={this
                    .searchYoutube
                    .bind(this)}>
                    Search
                </Button>
            </div>
        );
    }
}


class Cards extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            openDialog: false,
            showSave: false
        }
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
        var data= this.props.data;
        var _this = this;
        // var url="https://youtube.com/watch?v=";
        return (
                                   
            <Grid container gutter={24}>
                {Object.keys(data).map(function(item,index){
     return (<Grid item xs={3} sm={2} key={index}>
                <Card >
                    <CardContent>
                        <CardMedia>
                            <img
                                src={data[item].image}
                                alt="Contemplative Reptile"
                                style={{
                                width: '100%'
                            }}/>
                        </CardMedia>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="Save Video" onClick={() => _this.saveVideo({url: data[item].url,image : data[item].image})}  key={item}>
                            <Icon>save</Icon>
                        </IconButton>
                        <Player url={data[item].url}/>                        
                    </CardActions>
                </Card>
            </Grid>   )  
        })
     }
            </Grid>  
        );
    }
}

class Loader extends React.Component {
    render() {
        return(
             <Grid container gutter={24}>
             <CircularProgress /> 
            </Grid>
        );
    }
}

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

class SearchBody extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchData: '',
            loader : false,
            showPopover: false
        }
    }

    searchResults(params, state) {
        state ? this.setState({searchData: params, loader: false}) : this.setState({loader: true});
        
    }

    render() {
        return (
            <Grid container gutter={24}>
                <SearchBar
                    callback={this
                    .searchResults
                    .bind(this)}/>
                    <div>
                    {this.state.loader ?  <Loader /> : <Cards data={this.state.searchData}/>}
                    </div>
            </Grid>
        );
    }
}


class Body extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <SearchBody/>
            </div>
        );
    }
}

SearchBody.protoTypes = {
    callback: PropTypes.func,
}

Cards.PropTypes = {
    saveVideo: PropTypes.func,
}

export default Body;