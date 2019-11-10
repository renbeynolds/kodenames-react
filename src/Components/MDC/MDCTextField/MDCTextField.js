import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

const classNames = require('classnames');

class MDCTextField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    onFocus = (event) => {
        this.setState({
            active: true
        });
    }

    onBlur = (event) => {
        var input = event.target;
        if(input.value.length === 0) {
            this.setState({
                active: false
            });
        }
    }

    render() {
        const { active } = this.state;

        const wrapperClass = classNames({
            'MDCTextField__wrapper': true
        }, this.props.className);

        const textfieldClass = classNames({
            'mdc-text-field': true,
            'mdc-text-field--outlined': true,
            'mdc-text-field--focused': active
        });

        const labelClass = classNames({
            'mdc-floating-label': true,
            'mdc-floating-label--float-above': active
        });

        const outlineClass = classNames({
            'mdc-notched-outline': true,
            'mdc-notched-outline--notched': active
        });

        return (
            <div className={wrapperClass}>
                <div className={textfieldClass}>
                    <input type="text" id="tf-outlined" className={"mdc-text-field__input"} onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.props.onChange} />
                    <div className={outlineClass}>
                        <div className={"mdc-notched-outline__leading"}></div>
                        <div className={"mdc-notched-outline__notch"}>
                            <label htmlFor="tf-outlined" className={labelClass}>{this.props.label}</label>
                        </div>
                        <div className={"mdc-notched-outline__trailing"}></div>
                    </div>
                </div>
            </div>
        );
    }

}

MDCTextField.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string
}

MDCTextField.defaultProps = {
    label: "Help Text"
}

export default MDCTextField;