import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyDcKCbUAj42ob2Jodn7nuga9WXWyY4FXxY";

class App extends React.Component {
    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.onTermSubmit('');
    }


    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search/',
            {
                params: {
                    part: "snippet",
                    maxResults: 5,
                    key: KEY,
                    type: "video",
                    q: term
                }
            });
        this.setState({
            videos: response.data.items,
            selectedVideo:response.data.items[0]
        });

    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>


            </div>
        );
    }

}

export default App;