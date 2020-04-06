import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return { song: state.selectedSong };
}

class SongDetail extends Component {
    render() {
        if(!this.props.song){
            return <div>Select a Song</div>;
        }
        return (
            <div>
                <h3>Details for:</h3>
                <p>Title: {this.props.song.title}</p>
                <p>Duration: {this.props.song.duration}</p>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(SongDetail);