import React from 'react';

const VideoItem = ({ video , handleVideoSelect }) => {

    return (

        <div onClick={ () => handleVideoSelect(video)} className="d-flex align-items-center flex-column mt-3">
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} width="350" height="200"/>
            <div className="text-white text-center">
                <div>{video.snippet.title}</div>
            </div>
        </div>

    )
};

export default VideoItem;

