import React, { Component } from 'react'
import Input from '../Atoms/Input'
// import Button from '../Atoms/Button'
import Button from '@material-ui/core/Button'
import CancelPopUp from '../Organisms/CancelPopUp'

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addSong: {
                songName: "",
                artist: "",
                location: "",
                album: "",
                duration: "",
                tags: "",
                songNameError: "",
                locationError: ""
            },
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);

    }

    //to handle input tags   
    handleInput = (e) => {
        let addSong = this.state.addSong;
        addSong[e.target.name] = e.target.value
        this.setState({
            addSong
        }
        )
        console.log({ [e.target.name]: e.target.value })
    }
    //validation of the form
    validate = () => {
        console.log("validation entry",this.state.addSong.songName);
        let songNameError = "";
        let locationError = "";

        if (!this.state.addSong.songName) {
            songNameError = "name cannot be blank";
        }

        if (!this.state.addSong.location) {
            locationError = "location cannot be blank";
        }

        if (songNameError || locationError) {
            this.setState({ songNameError, locationError });
            return true;
        }
        console.log("validation exit");
        return false;
    };
    //on submit of the form
    handleFormSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(this.state.addSong);
        }
    };
    render() {
        return (
            <div>
                <fieldset className="field-set">
                    <form className="container-fluid" onSubmit={this.handleFormSubmit}>
                        <div>
                            <Input inputType={'text'}
                                title={'Song Title/Name:'}
                                name={'songName'}
                                id={'songName'}
                                value={this.state.addSong['songName']}
                                placeholder={'Enter songName'}
                                handleChange={this.handleInput}
                            />
                        </div>
                        <div style={{ fontSize: 12, color: "red", fontFamily:"'lucida grande', tahoma, verdana, arial, sans-serif" }}>
                            {this.state.songNameError}
                        </div>
                        <div>
                            <Input inputType={'text'}
                                title={'Artist:'}
                                name={'artist'}
                                value={this.state.addSong.artist}
                                placeholder={'Enter artist'}
                                handleChange={this.handleInput}
                            />
                        </div>
                        <div>
                            <Input inputType={'text'}
                                title={'Location:'}
                                name={'location'}
                                value={this.state.addSong.location}
                                placeholder={'Enter location'}
                                handleChange={this.handleInput}
                            />
                        </div>
                        <div>
                            <Input inputType={'text'}
                                title={'Album:'}
                                name={'album'}
                                value={this.state.addSong.album}
                                placeholder={'Enter album'}
                                handleChange={this.handleInput}
                            />
                        </div>
                        <div>
                            <Input inputType={'number'}
                                title={'Duration:'}
                                name={'duration'}
                                value={this.state.addSong.duration}
                                placeholder={'Enter duration in secs'}
                                handleChange={this.handleInput}
                            />
                        </div>
                        <div>
                            <Input inputType={'text'}
                                title={'Tags:'}
                                name={'tags'}
                                value={this.state.addSong.tags}
                                placeholder={'Enter tags'}
                                handleChange={this.handleInput}
                            />
                        </div>
                        <div>
                            {/* <Button
                                className="button-style"
                                action={this.handleFormSubmit}
                                type={'primary'}
                                title={'Submit'}
                                variant="contained"

                            /> */}
                            <Button type="submit" 
                                    variant="contained" 
                                    color="secondary"
                                    onChange={this.handleFormSubmit}>
                                    Submit
                            </Button>
                            <CancelPopUp />
                        </div>
                    </form>
                </fieldset>
                <div>
                    {this.state.addSong.songNameError}
                </div>
            </div>
        );
    }
}

export default Form;