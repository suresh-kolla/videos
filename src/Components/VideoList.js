import React from "react";
import Videoitem from "./Videoitem";
export default function VideoList({ videosList, onSelectVideo }) {
  const renderList = videosList.map((video) => {
    return (
      <Videoitem
        key={video.id.videoId}
        onSelectVideo={onSelectVideo}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
}
