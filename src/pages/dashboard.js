import React from 'react';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Thumbnail from '../images/thumbnail.jpg';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Data from '../data.js'
import Navbar from '../navbar';

class CardList extends React.Component {
    list = () => Object.keys(Data).map((key,index) => {
        return(
             <Grid item xs={3} sm={2} key={index}>
                <Card >
                    <CardContent>

                        <Typography type="headline" component="h2">
                            {Data[key].title}
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