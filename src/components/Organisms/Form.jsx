import React, { Component } from 'react'
import Input from '../Atoms/Input'
import Button from '@material-ui/core/Button'
import CancelPopUp from '../Organisms/CancelPopUp'

const initialState = {
        songName: "",
        artist: "",
        location: "",
        album: "",
        duration: "",
        tags: "",
        songNameError: "",
        locationError: ""
};

class Form extends Component {
    state = initialState;

    //to handle input tags
    handleChange = (event) => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };
    //validation of the form
    validate = () => {
        let songNameError = "";
        let locationError = "";

        if (!this.state.songName) {
            songNameError = "name cannot be blank";
        }

        if (!this.state.location) {
            locationError= "location cannot be blank";
        }

        if ( songNameError || locationError) {
            this.setState({ songNameError, locationError });
            return false;
        }

        return true;
    };
    //on submit of the form
    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(initialState);
        }
    };
    render() {
        return (
            <div>
                <fieldset className="field-set">
                    <form className="container-fluid" onSubmit={this.handleSubmit}>
                        <div>
                            <Input inputType={'text'}
                                title={'Song Title/Name:'}
                                name={'songName'}
                                id={'songName'}
                                value={this.state.songName}
                                placeholder={'Enter songName'}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <div style={{ fontSize: 12, color: "red", fontFamily:"'lucida grande', tahoma, verdana, arial, sans-serif" }}>
                            {this.state.songNameError}
                        </div>
                        <div>
                            <Input inputType={'text'}
                                title={'Artist:'}
                                name={'artist'}
                                value={this.state.artist}
                                placeholder={'Enter artist'}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <Input inputType={'text'}
                                title={'Location:'}
                                name={'location'}
                                value={this.state.location}
                                placeholder={'Enter location'}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <div style={{ fontSize: 12, color: "red", fontFamily:"'lucida grande', tahoma, verdana, arial, sans-serif" }}>
                            {this.state.locationError}
                        </div>
                        <div>
                            <Input inputType={'text'}
                                title={'Album:'}
                                name={'album'}
                                value={this.state.album}
                                placeholder={'Enter album'}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <Input inputType={'number'}
                                title={'Duration:'}
                                name={'duration'}
                                value={this.state.duration}
                                placeholder={'Enter duration in secs'}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <Input inputType={'text'}
                                title={'Tags:'}
                                name={'tags'}
                                value={this.state.tags}
                                placeholder={'Enter tags'}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <Button type="submit" 
                                    variant="contained" 
                                    color="secondary"
                                    onChange={this.handleSubmit}>
                                    Submit
                            </Button>
                            <CancelPopUp />
                        </div>
                    </form>
                </fieldset>
            </div>
        );
    }
}

export default Form;