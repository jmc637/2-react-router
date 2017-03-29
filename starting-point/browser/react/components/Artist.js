import React, { Component } from 'react';
import { Router, Link } from 'react-router';
import Songs from './Songs.js'

class Artist extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount () {

        this.props.selectArtist(this.props.params.artistId)
    }

    render(){
        // console.log(this.props)
       return (
            <div>
                <h3>{this.props.currentArtist.name}</h3>
                <h4>
                    {this.props.currentArtistAlbums.map(album =>
                        (
                            <div className="col-xs-4" key={ album.id }>
                            <Link to={`/albums/${album.id}`} className="thumbnail">
                                <img src={ album.imageUrl } />
                                <div className="caption">
                                    <h5>
                                    <span>{ album.name }</span>
                                    </h5>
                                    <small>{ album.songs.length } songs</small>
                                </div>
                            </Link>
                            </div>
                        )
                    )}
                </h4>
                <h4>
                    <Songs
                    songs={this.props.currentArtistSongs}
                    currentSong={this.props.currentSong}
                    isPlaying={this.props.isPlaying}
                    toggleOne={this.props.toggleOne}/>
                </h4>
            </div>
        );
    }
}

export default Artist;
