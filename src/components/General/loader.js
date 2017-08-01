import React from 'react';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';


class Loader extends React.Component {
    render() {
        return(
             <Grid container gutter={24}>
             <CircularProgress /> 
            </Grid>
        );
    }
}

export default Loader;
