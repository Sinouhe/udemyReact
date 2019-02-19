import React from 'react';
import VideoListItem from '../components/video-list-item'


const VideoList = ({movieList}) => {
    return (
        <div>
            <ul>
                {
                    movieList.map((movie) => {
                        return  <VideoListItem movie={movie} key={movie.id}/>
                    })
                }
               </ul>
        </div>
    );
}

export default VideoList;