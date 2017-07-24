import React from 'react';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Thumbnail from '../images/thumbnail.jpg';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Navbar from '../navbar';
import axios from "axios";

const Data = {} 


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

                        <Typography type="headline" component="h2">
                            {Data[key].id}
                        </Typography>
                        <CardMedia>
                            <img
                                src={Data[key].image}
                                alt="Contemplative Reptile"
                                style={{
                                width: '100%'
                            }}/>
                        </CardMedia>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="Delete Video" onClick={() => this.deleteVideo(Data[key]._id)}>
                            <Icon>delete</Icon>
                        </IconButton>
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