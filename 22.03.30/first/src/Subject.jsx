import React, {Component} from "react";

class Subject extends Component{
    constructor(props){
      super(props);
      this.state = {}
    }
    render(){
      var addition = null;
      if(this.state.show) addition = <p>추가요~</p>
      return (
        <header>
            <h1>{this.props.title}</h1>
            <a href="/" onClick={function(e){
              if(!this.state.show){
                this.setState({
                  show : true
                })}
                else this.setState({show: false})
              e.preventDefault();
            }.bind(this)}>눌러봐</a>
            <div>{addition}</div>
        </header>
      );
    }
  }

export default Subject;