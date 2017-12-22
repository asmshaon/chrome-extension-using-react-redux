import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import GamesPage from './GamesPage'

class App extends Component {
    render() {
        return (
            <div className="app">
                <div>
                    <h2>Welcome to React</h2>
                </div>

                <p>
                    <Link to="games">Games</Link>
                </p>

                <Route path="/games" component={GamesPage} />
            </div>
        );
    }
}

export default App;