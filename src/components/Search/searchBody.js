import React from "react";
import SearchBar from './searchBar';
import Cards from './cards';
import Loader from '../General/loader';
import Grid from 'material-ui/Grid';


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

export default SearchBody;