import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMessage } from '../actions/message_actions';

class Message extends Component {
    render() {
        const { index, message } = this.props;
        return (
            <li>
                <div>
                    <p>{message}</p>
                    <button onClick={e => this.props.deleteMessage(index)}>Delete</button>
                </div>
            </li>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        deleteMessage: (index) => {
            dispatch(deleteMessage(index));
        }
    }
}

Message = connect(mapStateToProps, mapDispatchToProp)(Message);

export default Message;