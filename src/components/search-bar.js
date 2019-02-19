import React,{Component} from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {serachText: '', placeHolder: 'Tapez cotre film...'}
    }

    render() {
        return (
            <div className='row'>
                <div className='col-md-8'>
                    <input  className='form-control input-lg'
                            onChange={this.handleChange.bind(this)}
                            type='test' 
                            placeholder={this.state.placeHolder}/>
                    </div>
            </div>
        )
    }    

    handleChange(event) {
        this.setState({searchText:event.target.value});
    }
}

export default SearchBar;