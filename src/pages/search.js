import React from "react";
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Navbar from '../navbar';
import Button from 'material-ui/Button';
import axios from "axios";
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Thumbnail from '../images/thumbnail.jpg';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

class SearchBar extends React.Component {

    searchYoutube(event) {
        var searched = document
            .getElementById("search")
            .value;
        let _this = this;
        if (searched.length > 0) {
            axios
                .get("http://localhost:3001/search?name=" + searched)
                .then(function (response) {
                    _this
                        .props
                        .callback(response.data);
                });

        }
    }

    render() {
        return (
            <Grid container gutter={24}>
                <TextField id="search" label="Search" margin="normal" fullWidth/>
                <Button
                    raised
                    onClick={this
                    .searchYoutube
                    .bind(this)}>
                    Search
                </Button>
            </Grid>
        );
    }
}

class Cards extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            openDialog: false
        }
    }


    render() {
        var data= this.props.data;
        var _this = this;
        var url="https://youtube.com/watch?v=";
        return (
            <Grid container gutter={24}>
                {Object.keys(data).map(function(item,index){
     return (<Grid item xs={3} sm={2} key={index}>
                <Card >
                    <CardContent>
                        <Typography type="headline" component="h2">
                            <a href={url+data[item]}>watch</a>
                        </Typography>
                        <CardMedia>
                            <img
                                src={Thumbnail}
                                alt="Contemplative Reptile"
                                style={{
                                width: '100%'
                            }}/>
                        </CardMedia>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="Add an alarm">
                            <Icon>mode_edit</Icon>
                        </IconButton>
                        <IconButton aria-label="Add an alarm">
                            <Icon>delete</Icon>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>   )  
        })
     }
            </Grid>  
        );
    }
}

class SearchBody extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchData: ''
        }
    }

    searchResults(params) {
        this.setState({searchData: params});
    }

    render() {
        return (
            <Grid container gutter={24}>
                <SearchBar
                    callback={this
                    .searchResults
                    .bind(this)}/>
                <Cards data={this.state.searchData}/>
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
    callback: PropTypes.func
}

export default Body;