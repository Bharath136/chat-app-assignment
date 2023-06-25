import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faSmile } from '@fortawesome/free-solid-svg-icons';
import { faLaugh, faHeart, faAngry } from '@fortawesome/free-regular-svg-icons';
import './App.css';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const colors = ['red', 'blue', 'green', 'skyblue'];

class App extends Component {
  state = { 
    message: '', 
    chatMessages: [], 
    showEmoji: false,
    randomUser: user_list[Math.floor(Math.random() * user_list.length)],
    randomColor: colors[Math.floor(Math.random() * colors.length)],
  };

  handleSendMessage = () => {
    const { message, chatMessages } = this.state;
    const randomUser = user_list[Math.floor(Math.random() * user_list.length)]; // Select a new random user
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const newChatMessage = {
      id: chatMessages.length + 1,
      user: randomUser,
      message: message,
      likeCount: 0,
    };
    const updatedChatMessages = [...chatMessages, newChatMessage];
    this.setState({ chatMessages: updatedChatMessages, message: '', randomUser: randomUser , randomColor: randomColor});
  };

  handleLike = (id) => {
    const { chatMessages } = this.state;
    const updatedChatMessages = chatMessages.map((chatMessage) => {
      if (chatMessage.id === id) {
        return { ...chatMessage, likeCount: chatMessage.likeCount + 1 };
      }
      return chatMessage;
    });
    this.setState({ chatMessages: updatedChatMessages });
  };

  handleEmojiClick = () => {
    this.setState((prevState) => ({
      showEmoji: !prevState.showEmoji,
    }));
  };

  handleEmojiSelection = (emoji) => {
    this.setState((prevState) => ({
      message: prevState.message + emoji,
      showEmoji: false,
    }));
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSendMessage();
    }
  };

  render() {
    const { message, chatMessages, showEmoji, randomUser, randomColor } = this.state;

    return (
      <div className='chat-container'>
        <nav className='navbar'>
          <h1 className='heading'>Introductions</h1>
          <p className='description'>This channel is company wide chatter!</p>
        </nav>
        <div className='messages-container'>
          <div className='profile-container'>
            {chatMessages.map((chatMessage) => (
              <div key={chatMessage.id} className='message-container'>
                <div className='container'><div className='profile' >
                  {chatMessage.user[0]}
                </div>
                <div className='name-container'>
                  <p className='name'>{chatMessage.user}</p>
                </div></div>
                <div className='message-details'>
                  <p className='message'>{chatMessage.message}</p>
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className='like-icon'
                    onClick={() => this.handleLike(chatMessage.id)}
                  />
                  <p>{chatMessage.likeCount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='send-message-container'>
          <input
            type='text'
            className='input-field'
            placeholder='Enter your message...'
            value={message}
            onChange={(e) => this.setState({ message: e.target.value })}
            onKeyPress={this.handleKeyPress}

          />
          <FontAwesomeIcon
            icon={faSmile}
            className='smile-icon'
            onClick={this.handleEmojiClick}
          />
          {showEmoji && (
            <div className='emoji-container'>
              <FontAwesomeIcon
                icon={faLaugh}
                className='emoji-icon'
                onClick={() => this.handleEmojiSelection('😂')}
              />
              <FontAwesomeIcon
                icon={faHeart}
                className='emoji-icon'
                onClick={() => this.handleEmojiSelection('❤️')}
              />
              <FontAwesomeIcon
                icon={faAngry}
                className='emoji-icon'
                onClick={() => this.handleEmojiSelection('😡')}
              />
              <FontAwesomeIcon
                icon={faLaugh}
                className='emoji-icon'
                onClick={() => this.handleEmojiSelection('😂')}
              />
              <FontAwesomeIcon
                icon={faHeart}
                className='emoji-icon'
                onClick={() => this.handleEmojiSelection('❤️')}
              />
              <FontAwesomeIcon
                icon={faAngry}
                className='emoji-icon'
                onClick={() => this.handleEmojiSelection('😡')}
              />
              <FontAwesomeIcon
                icon={faLaugh}
                className='emoji-icon'
                onClick={() => this.handleEmojiSelection('😂')}
              />
              <FontAwesomeIcon
                icon={faHeart}
                className='emoji-icon'
                onClick={() => this.handleEmojiSelection('❤️')}
              />
              <FontAwesomeIcon
                icon={faAngry}
                className='emoji-icon'
                onClick={() => this.handleEmojiSelection('😡')}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
