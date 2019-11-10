import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

const classNames = require('classnames');

function MDCButton(props) {

    var btnClass = classNames({
        'mdc-button': true,
        'mdc-button--outlined': props.outlined,
        'mdc-button--raised': props.raised
    },
    props.className);

    return (
        <button className={btnClass} onClick={props.onClick}>
            <div className="mdc-button__ripple"></div>
            <span className="mdc-button__label">{props.text}</span>
        </button>
    );
}

MDCButton.propTypes = {
    text: PropTypes.string,
    outlined: PropTypes.bool,
    raised: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func
}

MDCButton.defaultProps = {
    text: "Button",
    outlined: false,
    raised: false
}

export default MDCButton;