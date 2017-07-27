import React from 'react';
import Grid from 'material-ui/Grid';
import axios from "axios";
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import PropTypes from 'prop-types';




import Player from './player.js';


class Cards extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            openDialog: false,
            showSave: false
        }
        this.dragStart = this.dragStart.bind(this);
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
dragStart(event){  
 event.dataTransfer.setData('text',event.target.id); 
}

    render() {
        var data= this.props.data;
        var _this = this;
        // var url="https://youtube.com/watch?v=";
        return (
                                   
            <Grid container gutter={24}>
                {Object.keys(data).map(function(item,index){
     return (<Grid item xs={6} sm={6} key={index} id={data[item].url+"%%%"+data[item].image} draggable="true" onDragStart={ _this.dragStart}>
                <Card draggable="false">
                    <CardContent>
                        <CardMedia>
                            <img
                            id={data[item].url}
                                src={data[item].image}
                                alt="Thumbnail"
                                style={{
                                width: '100%'
                            }}/>
                        </CardMedia>
                    </CardContent>
                    {/*<CardActions>
                        <IconButton aria-label="Save Video" onClick={() => _this.saveVideo({url: data[item].url,image : data[item].image})}  key={item}>
                            <Icon>save</Icon>
                        </IconButton>
                        <Player url={data[item].url}/>                        
                    </CardActions>*/}
                </Card>
            </Grid>   )  
        })
     }
            </Grid>  
        );
    }
}

Cards.PropTypes = {
    saveVideo: PropTypes.func,
}

export default Cards;