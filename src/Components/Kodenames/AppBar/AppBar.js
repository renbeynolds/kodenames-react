import PropTypes from 'prop-types';
import React from 'react';
import MDCButton from '../../MDC/MDCButton';
import MDCTextField from '../../MDC/MDCTextField';
import './styles.scss';

function AppBar(props) {
    return (
        <div className='AppBar__wrapper'>
            <div className='AppBar__title'>
                <h1>KodeNames</h1>
            </div>
            <div className='AppBar__score'>
                <h1>Remaining: </h1>
                <h1 className='AppBar__scoreRed'>{props.redRemaining}</h1>
                <h1 className='AppBar__scoreBlue'>{props.blueRemaining}</h1>
            </div>
            <div className='AppBar__controls'>
                <MDCTextField
                    label="Board Number"
                    onChange={props.onBoardChange}
                    className='AppBar__boardNumberField'
                />
                <div className='AppBar__buttons'>
                    <MDCButton
                        text='Reset'
                        onClick={props.onReset}
                        className='AppBar__resetButton'
                        raised={true}
                        />
                    <MDCButton
                        text='Spymaster'
                        onClick={props.onSpymaster}
                        className='AppBar__spymasterButton'
                        raised={true}
                        />
                </div>
            </div>
        </div>
    );
}

AppBar.propTypes = {
    onBoardChange: PropTypes.func,
    onSpymaster: PropTypes.func,
    onReset: PropTypes.func,
    redRemaining: PropTypes.number,
    blueRemaining: PropTypes.number
}

export default AppBar;