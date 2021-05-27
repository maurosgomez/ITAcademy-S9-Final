import React from "react";
import youtube from "./apis/youTube";
import SearchBar from "./components/searchBar";
import VideoDetail from "./components/videoDetail";
import VideoList from "./components/videoList";
class App extends React.Component {

  state =
  {
        videos: [ ],
        selectedVideo: null
  }

handleSubmit = async (termFromSearchBar) => {

    const response = await youtube.get("/search", {
        params: {
          q: termFromSearchBar,
        },
    });

    this.setState ({
      videos: response.data.items
    })
      console.log("Watch my videos", response);
  };
  
handleVideosSelect = (video) => {
  
    this.setState({selectedVideo: video})  
  }

    render() { 
      return (
        
      <div>
        <SearchBar handleFormSubmit={this.handleSubmit}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>        
      </div>

    );
  };
}

export default App;
