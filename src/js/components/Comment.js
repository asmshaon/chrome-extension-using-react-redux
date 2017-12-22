import React, {Component} from 'react';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };

        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
    }

    edit() {
        this.setState({
            editing: true
        });
    }

    delete() {
        this.props.deleteCommentText(this.props.index);
    }

    save() {
        this.setState({
            editing: false
        });

        this.props.updateCommentText(this.refs.newText.value, this.props.index);
    }

    renderForm() {
        return (
            <div className="commentContainer">
                <div className="commentText">
                    <textarea ref="newText" defaultValue={this.props.children}></textarea>
                    <button onClick={this.save}>Save</button>
                </div>
            </div>
        );
    }

    renderNormal() {
        return (
            <div className="commentContainer">
                <div onClick={this.edit} className="commentText">{this.props.children}</div>
                <button onClick={this.edit}>Edit</button>
                <button onClick={this.delete}>Delete</button>
            </div>
        );
    }

    render() {
        if (this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderNormal();
        }
    }
}

export default Comment;
