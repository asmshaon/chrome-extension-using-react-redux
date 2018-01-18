export const SET_USERS = 'SET_USERS';

export function setUsers(users) {
    return {
        type: SET_USERS,
        users
    }
}

export function fetchUsers() {
    return dispatch => {
        fetch('/api/users')
            .then(res => res.json())
            .then(data => dispatch(setUsers(data.users)));
    }
}
