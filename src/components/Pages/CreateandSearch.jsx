import React,{Component} from 'react';
import Header from '../Organisms/Header';
import SearchList from '../Organisms/SearchList';

class CreateandSearch extends Component{
    render(){
        return(
            <div>
                <Header />
                <SearchList />
            </div>
        );
    }
}

export default CreateandSearch;