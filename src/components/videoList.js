import React from "react";
import VideoItem from './videoItem';

const VideoList = ({ videos , handleVideoSelect }) => {

  const renderedVideos =  videos.map((video) => {

      return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
 
  });

  return <div>{renderedVideos}</div>;

};

export default VideoList;
