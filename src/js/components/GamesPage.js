import React, {Component} from 'react';
import '../containers/GameList';
import GameList from "../containers/GameList";

export default class GamesPage extends Component {

    render() {
        return (
            <div>
                Games page
                <GameList/>
            </div>
        );
    }
}