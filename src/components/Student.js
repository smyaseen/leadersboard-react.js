import React, {Component} from 'react';
import "../styles/StudentStyle.css"


let textStyle = {
    background: "white"
}

class Person extends Component {

    constructor() {
        super();
        this.state = {
            score:   1,
        }
    }

    componentDidMount() {
     
        this.setState({
            score: this.props.score,
        });
    }

    addScore() {
        this.setState({
            score: this.state.score + 1
        });
    }

    subScore() {
        this.setState({
            score: this.state.score - 1
        });
    }

    render() {

        let text;
        if (this.state.score >= 350) {
            text = "success";
            textStyle = {
                background: "green"
            }
        }
        else if (this.state.score <= 340) {
            text = "failure";
            textStyle = {
                background: "red"
            }
        }
        else {
            text = "";
            textStyle = {
                background: "white"
            }
        }

        return(
            <div className="student">
                <div className="left">
                    <h2 className="name">{this.props.name}
                    <button className="addScoreBtn" onClick={() => this.addScore()}>+</button>
                    <button className="subScoreBtn" onClick={() => this.subScore()}>-</button>
                    </h2>
                    <p className="university">{this.props.university} <span id="text" style={textStyle}>{text}</span></p>
                </div>
                <div className="right">
                    <p className="score">{this.state.score}</p>
                </div>
            </div>
        )
    }
}

export default Person;