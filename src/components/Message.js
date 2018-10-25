import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMessage, updateMessage } from '../actions/message_actions';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: true
        }
        this.handleUpdateMessage = this.handleUpdateMessage.bind(this);
    }

    handleUpdateMessage(e) {
        const { index, updateMessage } = this.props;
        updateMessage(index, e.target.value);
        this.setState({ hide: true });
    }

    render() {
        const { index, messages, deleteMessage } = this.props;
        const styles = {
            display: {
                display: 'block',
                margin: '0px auto'
            },
            displayNone: { display: 'none' }
        }
        return (
            <li>
                <div>
                    <p onDoubleClick={() => this.setState({ hide: false })}
                        style={this.state.hide ? styles.display : styles.displayNone}>{messages[index]}</p>
                    <input type="text" defaultValue={messages[index]} onKeyPress={e => {
                        if (e.key === 'Enter') {
                            this.handleUpdateMessage(e);
                        }
                    }} onBlur={this.handleUpdateMessage} style={!this.state.hide ? styles.display : styles.displayNone} />
                    <button onClick={e => deleteMessage(index)}>Delete</button>
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
        },
        updateMessage: (index, message) => {
            dispatch(updateMessage(index, message));
        }
    }
}

Message = connect(mapStateToProps, mapDispatchToProp)(Message);

export default Message;