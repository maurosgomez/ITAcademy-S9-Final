import React from "react";
import youtube from "./apis/youTube";
import SearchBar from "./components/searchBar";
import VideoDetail from "./components/videoDetail";
import VideoList from "./components/videoList";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {

state = 
{
    videos: [],
    selectedVideo: null
}

handleSubmit = async (termFromSearchBar) => {

    const response = await youtube.get("/search", {
        params: {
            q: termFromSearchBar
        }
    })

    this.setState({
        videos: response.data.items

    })

    console.log("Mira mis videos", response);

};

handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
}

render() {
    return (

        <>
            <SearchBar handleFormSubmit={this.handleSubmit}/>
            <div className="d-flex flex-row" >
                <div className="videodetail">
                    <VideoDetail className="float-left" video={this.state.selectedVideo}/>
                </div>    
                <div className="videolist">
                    <VideoList className="float-right" handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/> 
                </div>    
            </div>
        </>

    )
  }
}

export default App;