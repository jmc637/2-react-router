import React from 'react';
import Songs from '../components/Songs';

class Album extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAlbumId : -1
    }
  }

  ComponentDidMount () {
    this.setState({
      selectedAlbumId : props.params.albumId
    })
    this.props.selectAlbum(this.state.slectedAlbumId)
  }

  render () {
    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={album.songs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          toggleOne={toggleOne} />
      </div>
    );
  }
}
// const Album = (props) => {

// }

export default Album;
