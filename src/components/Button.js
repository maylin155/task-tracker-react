import React from 'react';
import PropTypes from 'prop-types';

const Button = ({color, text, onClick}) => {
  return (
    <button className="button" onClick={onClick} style={{backgroundColor: color, color: 'white', paddingLeft: 20, paddingRight: 20}}>
        {text}
    </button>
  )
}

Button.defaultProps = {
    color: 'red'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func


}

export default Button