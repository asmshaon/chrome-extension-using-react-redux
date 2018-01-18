import React, {Component} from 'react';
import '../containers/UserList';
import UserList from "../containers/UserList";

export default class UsersPage extends Component {

    render() {
        return (
            <div>
                Vroom User List
                <UserList/>
            </div>
        );
    }
}
