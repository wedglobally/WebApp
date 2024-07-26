import React from 'react';
import PropTypes from 'prop-types';

const SendMessage = ({ scroll }) => {
  // Assuming scroll.current is used like this
  const scrollToBottom = () => {
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="send-message">
      {/* Your send message component */}
    </div>
  );
};

SendMessage.propTypes = {
  scroll: PropTypes.shape({
    current: PropTypes.object.isRequired, // Assuming it's a ref object
  }).isRequired,
};

export default SendMessage;
