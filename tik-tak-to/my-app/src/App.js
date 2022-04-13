import logo from './logo.svg';
import './App.css';
import Square from './components/Sqaure';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Board className= "Board" size="3"></Board>
    </div>
  );
}

export default App;
