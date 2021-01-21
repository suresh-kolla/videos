import React from "react";
import "../styles/Videoitem.css";

export default function Videoitem({ video, onSelectVideo }) {
  return (
    <div
      onClick={() => {
        onSelectVideo(video);
      }}
      className="video-item item"
    >
      <img
        alt={video.etag}
        className="ui  image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <b className="header">{video.snippet.title}</b>
        {/* <div className="description">
            </div> */}
      </div>
    </div>
  );
}
