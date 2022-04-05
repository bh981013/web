import React, {Component} from 'react';
import './App.css';
import Subject from './Subject';
//하나의 최상위태그
//js 가 아닌, 유사 js = jsx


class Article extends Component{
  render(){
    return (
      <article>
        <ul>
            <li>web1</li>
            <li>web2</li>
            <li>web3</li>
        </ul>
        <ol>
            <li> num1</li>
            <li>num2</li>
        </ol>
    </article>
    )
  }

}

class App extends Component {
  render(){
    return (
    <div className="App">
      <Subject title = "NEW TITLE"></Subject>
      <Article></Article>
    </div>
    )
  }
}

export default App;
