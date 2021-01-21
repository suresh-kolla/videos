import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import Videodetails from "./Videodetails";
import youtube from "../apis/youtube";

export default class app extends Component {
  state = { videoList: [], selectedVideo: null };
  KEY = "AIzaSyAjbB3lnb1S_MakGPO5pv6oZQJeoOqnsHo";
  componentDidMount() {
    this.getSearch("Tirigi tirigi");
  }
  getSearch = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        type: "video",
        part: "snippet",
        maxResults: 5,
        key: this.KEY,
      },
    });
    console.log(response.data.items);
    this.setState({
      videoList: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onSelectVideo = (selectedVideo) => {
    this.setState({ selectedVideo });
  };
  render() {
    console.log(this.state.selectedVideo);
    return (
      <div className="ui container">
        <SearchBar getSearch={this.getSearch} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <Videodetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onSelectVideo={this.onSelectVideo}
                videosList={this.state.videoList}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
