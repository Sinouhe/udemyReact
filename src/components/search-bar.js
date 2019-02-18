import React,{Component} from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {serachText:'', placeHolder:'Tapez cotre film...'}
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
                <p>{this.state.searchText}</p>
            </div>
        )
    }    

    handleChange(event) {
        console.log(event.target.value);
        this.setState({searchText:event.target.value});
    }
}

export default SearchBar;