import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
        selectedVideoTags: []
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response.data);
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    handleTagsSelect = async () => {
        console.log("I'm clicked");
        const tagRes = await youtube.get('/videos',{
            params: {
                id:this.state.selectedVideo.id.videoId
            }
        })
        
        console.log("this is resp",tagRes.data);
        console.log("this is resp",tagRes.data.items[0].snippet.tags);

        this.setState({
            selectedVideoTags: tagRes.data.items[0].snippet.tags
        })
        if(localStorage.getItem('tags') === null){
            localStorage.setItem('tags',JSON.stringify([]));
        }    
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} tags={this.state.selectedVideoTags} handleTagsSelect={this.handleTagsSelect}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;