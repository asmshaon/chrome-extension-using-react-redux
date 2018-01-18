import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchUsers} from '../actions/actions'

class UserList extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map((user, key) => {
                        return <div key={key}>{user.firstName}</div>
                    })
                }
            </div>
        )
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {fetchUsers})(UserList);
