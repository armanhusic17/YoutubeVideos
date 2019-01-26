import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../APIs/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {

  state = { videos: [], selectedVideo: null };


  onSearchSubmit = async SearchTerm => {
      const response = await youtube.get('/search', {
        params: {
          q: SearchTerm
        }
      });


      this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {

      this.setState({ selectedVideo: video });
  };

    render() {
      return (
        <div className="ui container">
          <SearchBar onFormSubmit={this.onSearchSubmit} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
        </div>
      );
    }


}

export default App;
