import React, {Component} from 'react';
import './App.css';
import Subject from './Subject';
//하나의 최상위태그
//js 가 아닌, 유사 js = jsx
//props 를 통해 component를 조작하게 됨.

class Article extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: "study"
    }
  }
  render(){
    let studyList = [];
    for(let i= 0 ; i<this.props.size; i++){
      studyList.push(<li key = {i}><a href="/" onClick={function(e){
        this.props.func();
        e.preventDefault();
      }.bind(this)}>{this.props.name || this.state.name}{i}</a></li>)
    }
    return (
      <article>
        <ul>
              {studyList}
        </ul>
    </article>
    )
  }

}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    let title = "나의 일상";
    if(this.state.changeTitle) title = "이제부터 다른 일상";
    return (
    <div className="App">
      <Subject title = {title}></Subject>
      <Article size = "5" func = {function(){
        this.setState({changeTitle : true});
      }.bind(this)} name="work"></Article>
      <Article size = "2"></Article>
    </div>
    )
  }
}

export default App;
