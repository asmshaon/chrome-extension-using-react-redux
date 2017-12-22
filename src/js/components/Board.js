import React, {Component} from 'react';
import Comment from "./Comment";

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };

        this.addComment = this.addComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }

    addComment(text) {
        let comments = this.state.comments;
        comments.push(text);
        this.setState({comments: comments});
    }

    updateComment(text, i) {
        let comments = this.state.comments;
        comments[i] = text;
        this.setState({comments: comments});
    }

    deleteComment(i) {
        let comments = this.state.comments;
        comments.splice(i, 1);
        this.setState({comments: comments});
    }

    commentForm(text, i) {
        return (
            <Comment key={i} index={i} updateCommentText={this.updateComment} deleteCommentText={this.deleteComment}>
                {text}
            </Comment>
        );
    }

    render() {
        return (
            <div>
                <button onClick={this.addComment.bind(null, 'Default Text')}>Add New Comment</button>
                <div className="commentContainer">
                    {
                        this.state.comments.map((text, i) =>
                           this.commentForm(text, i)
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Board;
