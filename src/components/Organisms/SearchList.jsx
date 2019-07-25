import React, {Component} from 'react';
import dataFile from '../../data/DataFile.json';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import PlaylistCreated from '../Organisms/PlaylistCreated';

class SearchList extends Component{
    constructor() {
        super();

        this.state = {
            myArray: [],
            searchTerm: "",
            displayArray:[]
        }
        this.handleChecked = this.handleChecked.bind(this);
        this.searchResult = this.searchResult.bind(this);
        // set this, because you need get methods from CheckBox 
    }
    //search results
    searchResult=(e,dataFile)=>{
        var searchValue = this.state.searchTerm;
        console.log(searchValue)
        const songFilter = dataFile.filter(function(song){
            return song.songName === searchValue;
        })
        this.setState({displayArray:songFilter})
    }
    //handle change
    handleChange = (e) => {
        const isCheckbox = e.target.type === "checkbox";
        this.setState({
            [e.target.name]: isCheckbox
                ? e.target.checked
                : e.target.value
        });
    };
    //handle for checking the result
    handleChecked = (e, fileData) => {
        console.log(e.target.checked)
        console.log(fileData.songName);
        if (e.target.checked === true) {
            let myArray = this.state.myArray;
            myArray.push(fileData.songName)
            this.setState({ myArray })
            console.log(this.state.myArray);
        }
        if (e.target.checked === false) {
            let valueArray = this.state.myArray;
            var value = valueArray.indexOf(fileData.songName);
            if (value !== -1) {
                valueArray.splice(value, 1);
                this.setState({ myArray: valueArray });
            }
            console.log(this.state.myArray);

        }
    }

    render(){
        return(
            <div className="div-list">
                <h1>Create Playlist</h1>
                <div className="search-div">
                <TextField InputProps={{
                    style: {
                        color: "black"
                    }
                }} type="text" value={this.state.searchTerm} onChange={this.handleChange} autoFocus name="searchTerm" placeholder="Search..."></TextField>
                <Button onClick={e=>{this.searchResult(e,dataFile)}}>Search</Button>
                <div>
                {this.state.displayArray.map((fileData, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    Song Title:{fileData.songName}<br />
                                    Artist:{fileData.artist}
                                </div>
                            </div>
                        )
                    })}
                </div>
                </div>
                <div>
                    {dataFile.map((fileData, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <Checkbox color="primary" onChange={e => this.handleChecked(e, fileData)} />Song Title:{fileData.songName}
                                </div>
                                <div>
                                    Artist:{fileData.artist}
                                </div>
                                <br></br>
                            </div>
                        )
                    })}
                </div>
                <div>
                    {this.state.myArray}
                </div>
                <div>
                    <PlaylistCreated color="secondary" />
                </div>
            </div>
        )
    }
}

export default SearchList