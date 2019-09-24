/* eslint-disable arrow-parens */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const WishInput = ({ onNewWish }) => {
  const [newWishText, setnewWishTex] = useState('');
  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish</legend>
      <input
        className="wish-input__field"
        type="text"
        placeholder="Enter your wish here"
        value={newWishText}
        onChange={e => setnewWishTex(e.target.value)}
        onKeyUp={e => {
          if (e.key === 'Enter' && newWishText.length > 0) {
            onNewWish({ done: false, text: newWishText });
            setnewWishTex('');
          }
        }}
      />
    </fieldset>
  );
};

WishInput.propTypes = {
  onNewWish: PropTypes.func,
};

WishInput.defaultProps = {
  onNewWish: () => {},
};

export default WishInput;
