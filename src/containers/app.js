import React,{Component} from 'react';
import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import axios from 'axios';
import VideoDetail from '../components/video-detail';
import Video from '../components/video';

const API_KEY = 'cd7959796911d256e91ff0c9beec18e9';

const API_END_POINT = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIES_URL = 'discover/movie?api_key=[%API_KEY%]&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
const POPULAR_MOVIES_URL_WITH_API_KEY = POPULAR_MOVIES_URL.replace('[%API_KEY%]',API_KEY);
const VIDEO_MOVIE = 'movie/[%movie_id%]/videos?api_key=[%API_KEY%]&language=en-US';
const VIDEO_MOVIE_WITH_API_KEY = VIDEO_MOVIE.replace('[%API_KEY%]',API_KEY);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {movieList: {}, currentMovie: {}};
    }

    componentWillMount() {
        this.initMovies();
                
    }

    initMovies() {
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL_WITH_API_KEY}`)
                .then((reponse) => {
                    this.setState({ movieList: reponse.data.results.slice(1,6), 
                                    currentMovie: reponse.data.results[0]},
                                    () => {
                                        this.applyVideoToCurrentMovie();
                                    });
                });
    }

    applyVideoToCurrentMovie(){
        axios.get(`${API_END_POINT}${VIDEO_MOVIE_WITH_API_KEY.replace('[%movie_id%]',this.state.currentMovie.id)}`)
                .then((reponse) => {
                    const youTubeKey = reponse.data.results[0].key;
                    let newCurrentMovieState = this.state.currentMovie
                    newCurrentMovieState.videoId = youTubeKey;
                    this.setState({currentMovie: newCurrentMovieState});
                });
    }

    render() {
        const renderVideoList = () => {
            if (this.state.movieList.length >= 5){
                return <VideoList movieList={this.state.movieList}/>; 
            }
        }
        return (
            <div>
                <SearchBar/>
                <Video videoId = {this.state.currentMovie.videoId} />
                {renderVideoList()}
                <VideoDetail    title={this.state.currentMovie.title} 
                                description={this.state.currentMovie.overview} /> 
            </div>
            );
    }    
}

export default App;