import React, {Component} from "react";
import Square from "./Sqaure";
import "./Board.css"
class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {turn : -1};
    }

    changeTurn(){
        if(this.state.turn == 0) this.setState({turn: 1});
        else this.setState({turn: 0})
    }

    renderSquares(size){
        let square =  <Square onClick={this.changeTurn.bind(this)} turn={this.state.turn}></Square>;
        let sqs = [];
        for(let i = 0; i<size; i++){
            sqs.push(square);
        }
        return sqs;
    }


    render(){
        let arr = []
        for(let i= 0; i< this.props.size; i++)
         arr.push(<div>{this.renderSquares(this.props.size)}</div>);
        return arr;
    }
}

export default Board;