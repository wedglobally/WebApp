import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => {
  return (
    <div className="message">
      <div className="avatar">
        <img src={message.avatar} alt="Avatar" />
      </div>
      <div className="content">
        <div className="name">{message.name}</div>
        <div className="text">{message.text}</div>
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message;
