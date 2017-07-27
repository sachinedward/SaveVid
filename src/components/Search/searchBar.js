import React from "react";
import axios from "axios";
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';


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

export default SearchBar;