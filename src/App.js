import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addMessage } from './actions/message_actions';
import Message from './components/Message';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAddMessage = this.handleAddMessage.bind(this)
  }

  handleChange(e) {
    this.setState({ message: e.target.value });
  }

  handleAddMessage() {
    this.setState(({ message }) => {
      if (message) {
        this.props.submitNewMessage(message);
        return ({ message: '' });
      }
    })
  }

  render() {
    const { message } = this.state;
    return (
      <div className="App">
        <input type="text" name="message" value={message} onChange={this.handleChange}
          onKeyPress={e => {
            if (e.key == 'Enter') this.handleAddMessage(e);
          }} />
        <button onClick={this.handleAddMessage}>Add Message</button>
        <ul>
          {this.props.messages.map((mess, i) => <Message key={i} index={i} />)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;