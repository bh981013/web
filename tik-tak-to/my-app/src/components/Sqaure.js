import React, {Component} from "react";
class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {user:-1};
    }

    showUser(){
        if(this.props.turn == -1) return "-";
        else if(this.props.turn == 0) return "O";
        else return "X";
    }
    render(){
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.showUser()}
            </button>
        )
    }
}

export default Square;