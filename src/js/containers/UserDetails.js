import React from 'react';
import {connect} from 'react-redux';

class UserDetails extends React.Component {

    render() {
        if(!this.props.user) {
            return (
                <div>Select a user</div>
            );
        }
        return (
            <div>
                <h2>Name: {this.props.user.name}</h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetails);