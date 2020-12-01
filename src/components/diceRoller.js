import React from 'react'


const Die = (props) => {
    return (
        <button value={props.value} className="die" onClick={props.update}>
            d{props.value}
        </button>
    )
}

const Multiplier = (props) => {
    return (
        <input className="multiplier" type="number" pattern="[0-9]*" min="1" max="10" placeholder="1" onChange={props.update} />
    )
}

const Result = (props) => {
    return (
        <p className="result-box">{props.result}</p>
    )
}

class Diceroller extends React.Component {
    constructor() {
        super();
        this.state = {
            multiplier: 1,
            result: 0,
            dice: [4, 6, 8, 10, 12, 20]
        };
        this.changeMultiplier = this.changeMultiplier.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
    }
    renderResult() {
        return (
            <Result result={this.state.result} />
        )
    }
    renderMultiplier() {
        return (
            <Multiplier value={this.state.multiplier} update={this.changeMultiplier} />
        )
    }
    renderDice() {
        let toRender = [];
        let dice = this.state.dice;
        for (var i = 0; i < dice.length; i++) {
            toRender.push(
                <Die value={dice[i]} update={this.calculateTotal} />
            )
        }
        return toRender;
    }

    calculateTotal(e) {
        let multiplier = this.state.multiplier;
        let value = e.target.value;
        let result = 0;
        let random = () => {
            return Math.floor(Math.random() * value) + 1;
        }
        for (var i = 0; i < multiplier; i++) {
            result += random();
        }
        this.setState({
            result: result,
        })
    }
    changeMultiplier(e) {
        this.setState({
            multiplier: e.target.value
        })
    }
    render() {
        return (
            <div className="dice-roll-container">
                <h1>Roll Some Dice!</h1>
                <div className="multiplier-container">
                    {this.renderMultiplier()}
                </div>
                <div className="dice-container">
                    {this.renderDice()}
                </div>
                <div className="results-container">
                    {this.renderResult()}
                </div>
            </div>
        )
    }
}

export default Diceroller

