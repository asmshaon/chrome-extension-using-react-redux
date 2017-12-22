import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// import games from "../reducers/games";

class GameList extends Component {

    deleteAccount = () => (
        <div>
            <p>Are you sure?</p>
        </div>
    );

    createUserItems() {
        return (
            <li>sadfasdfasdf</li>
        )
    }
    render() {
        return (
            <ul>
                {this.deleteAccount()}
            </ul>
        )
    }
}

GameList.propTypes = {
    name: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps)(GameList);