import React,{Component} from 'react';
import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import axios from 'axios';

const API_KEY = 'cd7959796911d256e91ff0c9beec18e9';

const API_END_POINT = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIES_URL = 'discover/movie?api_key=[%API_KEY%]&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
const POPULAR_MOVIES_URL_WITH_API_KEY = POPULAR_MOVIES_URL.replace('[%API_KEY%]',API_KEY);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL_WITH_API_KEY}`)
                .then((reponse) => {
                    console.log(reponse)
                })
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList/>
            </div>
            );
    }    
}

export default App;