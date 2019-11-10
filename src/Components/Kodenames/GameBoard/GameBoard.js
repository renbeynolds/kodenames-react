import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './styles.scss';

const classNames = require('classnames');

class GameBoard extends Component {

    createTable = () => {
        let table = [];
        for(let row=0; row<5; row++) {
            let children = [];
            for(let col=0; col<5; col++) {
                let idx = row*5 + col;
                let card = this.props.cards[idx];
                children.push(
                    <Card
                        onClick={() => this.props.onCardClick(idx)}
                        word={card.word}
                        color={card.color}
                        active={card.active}
                        spymaster={this.props.spymaster}
                        key={idx}
                    />
                );
            }
            table.push(<tr key={row}>{children}</tr>);
          }
          return table;
    }
    
    render() {
        return(
            <div className="GameBoard__wrapper">
                <table className="GameBoard__table">
                    <tbody>
                        {this.createTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}

GameBoard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object),
    onCardClick: PropTypes.func
}

class Card extends React.Component {

    render() {

        const { color, active, word, onClick, spymaster } = this.props;

        const cardClass = classNames({
            'GameBoard__card': true,
            'GameBoard__cardBlue': (active || spymaster) && color === 'blue',
            'GameBoard__cardRed': (active || spymaster) && color === 'red',
            'GameBoard__cardYellow': (active || spymaster) && color === 'yellow',
            'GameBoard__cardGray': (active || spymaster) && color === 'gray',
            'GameBoard__cardGreen': (active && spymaster)
        });

        return (
            <td className={cardClass} onClick={onClick}>{word}</td>
        );
    }
}

Card.propTypes = {
    word: PropTypes.string,
    color: PropTypes.string,
    active: PropTypes.bool,
    spymaster: PropTypes.bool,
    onClick: PropTypes.func
}

export default GameBoard;