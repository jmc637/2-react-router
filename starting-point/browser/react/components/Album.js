import React from 'react';
import Songs from '../components/Songs';

class Album extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount () {
    console.log(this.props.params.albumId);
    this.props.selectAlbum(this.props.params.albumId)
  }

  render () {
    return (
      <div className="album">
        <div>
          <h3>{ this.props.album.name }</h3>
          <img src={ this.props.album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={this.props.album.songs}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.toggleOne} />
      </div>
    );
  }
}

export default Album;
