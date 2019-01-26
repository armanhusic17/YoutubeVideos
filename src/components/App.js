import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../APIs/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {

  state = { videos: [], selectedVideo: null };

componentDidMount() {

  this.onSearchSubmit('coding')

}



  onSearchSubmit = async SearchTerm => {
      const response = await youtube.get('/search', {
        params: {
          q: SearchTerm
        }
      });


      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      });
  };

  onVideoSelect = (video) => {

      this.setState({ selectedVideo: video });
  };

    render() {
      return (
        <div className="ui container">
          <SearchBar onFormSubmit={this.onSearchSubmit} />
            <div className="ui grid">
              <div className="ui row">
                <div className="eleven wide column">
                  <VideoDetail video={this.state.selectedVideo} />
                </div>
                  <div className="5 wide column">
                    <VideoList
                      onVideoSelect={this.onVideoSelect}
                      videos={this.state.videos}
                    />
                  </div>
              </div>
            </div>
        </div>
      );
    }


}

export default App;
