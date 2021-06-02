import React from "react";

const VideoDetail = ({ video }) => {

  if (!video) {

    return <h1>Ingrese su busqueda</h1>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (

    <div>
      <div>
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div>
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </div>

  );
};

export default VideoDetail;