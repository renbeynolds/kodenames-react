import React, { Component } from 'react';
import AppBar from '../../Components/Kodenames/AppBar';
import GameBoard from '../../Components/Kodenames/GameBoard';
import allWords from './words.json';
var seedrandom = require('seedrandom');

const RED = 'red';
const BLUE = 'blue';
const YELLOW = 'yellow';
const GRAY = 'gray';

class Kodenames extends Component {

    constructor(props) {
        super(props);

        var cards = this.generateCards(1);
        this.state = {
            redRemaining: cards[0],
            blueRemaining: cards[1],
            cards: cards[2],
            boardNumber: 1
        };
    }

    generateCards(boardNumber) {
        let words = JSON.parse(JSON.stringify(allWords));
        var colors = [
            RED, RED, RED, RED, RED, RED, RED, RED,
            BLUE, BLUE, BLUE, BLUE, BLUE, BLUE, BLUE, BLUE,
            YELLOW, YELLOW, YELLOW, YELLOW, YELLOW, YELLOW, YELLOW,
            GRAY
        ];

        let red = 8;
        let blue = 8;

        var rng = seedrandom(boardNumber);
        if (rng() > 0.5) {
            colors.push(RED);
            red += 1;
        } else {
            colors.push(BLUE);
            blue += 1;
        }

        var cards = [];
        for (var i = 0; i < 25; i++) {
            var word_idx = Math.floor(rng() * words.length);
            var word = words[word_idx];
            words.splice(word_idx, 1);
            var color_idx = Math.floor(rng() * colors.length);
            var color = colors[color_idx];
            colors.splice(color_idx, 1);
            cards.push({
                word: word,
                color: color,
                active: false
            });
        }

        return [red, blue, cards];
    }

    onBoardChange = (event) => {
        let boardNumber = parseInt(event.target.value);
        let cards = this.generateCards(boardNumber);
        this.setState({
            redRemaining: cards[0],
            blueRemaining: cards[1],
            cards: cards[2],
            spymaster: false,
            boardNumber: boardNumber
        });
    }

    onSpymaster = () => {
        const newCards = this.state.cards.map(x => ({word: x.word, color: x.color, active: false}));
        this.setState({
            cards: newCards,
            spymaster: true
        });
    }

    onReset = () => {
        const cards = this.generateCards(this.state.boardNumber);
        this.setState({
            redRemaining: cards[0],
            blueRemaining: cards[1],
            cards: cards[2],
            spymaster: false
        });
    }

    onCardClick = (idx) => {
        if(this.state.cards[idx].active) {
            return;
        }
        let newCards = JSON.parse(JSON.stringify(this.state.cards));
        newCards[idx].active = true;
        if(newCards[idx].color === BLUE) {
          this.setState({
            cards: newCards,
            blueRemaining: this.state.blueRemaining - 1
          });
        } else if(newCards[idx].color === RED) {
          this.setState({
            cards: newCards,
            redRemaining: this.state.redRemaining - 1
          });
        } else {
          this.setState({
            cards: newCards
          });      
        }
    }

    render() {
        return (
            <div>
                <AppBar
                    onBoardChange={this.onBoardChange}
                    onSpymaster={this.onSpymaster}
                    onReset={this.onReset}
                    redRemaining={this.state.redRemaining}
                    blueRemaining={this.state.blueRemaining}
                />
                <GameBoard
                    cards={this.state.cards}
                    spymaster={this.state.spymaster}
                    onCardClick={this.onCardClick}
                />
            </div>
        );
    }
}

export default Kodenames;