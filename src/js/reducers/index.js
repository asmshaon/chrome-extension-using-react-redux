import {combineReducers} from 'redux';
import UserList from "./UserList";
import ActiveUser from "./ActiveUser";

const allReducers = combineReducers(
    {
        users: UserList,
        activeUser: ActiveUser
    }
);

export default allReducers;