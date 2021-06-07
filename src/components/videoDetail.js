import React from "react";

const VideoDetail = ({ video }) => {

  if (!video) {

    return <div className="text-white text-center mt-5">
       <pre className="h1">                 Ingresa tu búsqueda</pre>
    </div>

  }

  const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;
  
  return (

     <div className="d-flex justify-content-center bg-dark mt-5">
      <div className="text-white d-flex align-items-center justify-content-start flex-column mt-4">
        <iframe src={videoSource} allowFullScreen title="YouTube Video" width="800" height="500" />
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>

  );
};

export default VideoDetail;