import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import UsersPage from './UsersPage'

class App extends Component {
    render() {
        return (
            <div className="app">
                <div>
                    <h2>Welcome to React</h2>
                </div>

                <p>
                    <Link to="users">Users</Link>
                </p>

                <Route path="/users" component={UsersPage} />
            </div>
        );
    }
}

export default App;