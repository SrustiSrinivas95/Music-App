import React,{Component} from 'react';
import Form from '../Organisms/Form';
import Header from '../Organisms/Header';

class AddSong extends Component{
    render(){
        return(
            <div>
                <Header />
                <Form />
            </div>
        );
    }
}

export default AddSong;