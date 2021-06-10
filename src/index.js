import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { StylesProvider } from "@material-ui/core/styles";
import './index.css';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import AddLocationIcon from '@material-ui/icons/AddLocation';
// import AdbIcon from '@material-ui/icons/Adb';

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      squares: new Array(9).fill(0).map(row => new Array(9).fill(true)),
      x: 0,
      y: 0,
    };
  }
  handleClick(i, j){
    if ((i === this.state.x && j === this.state.y + 1) ||
      (i === this.state.x && j === this.state.y - 1) ||
      (i === this.state.x + 1 && j === this.state.y) ||
      (i === this.state.x - 1 && j === this.state.y)){
      if (i === this.state.squares.length-1 && j === this.state.squares.length-1)
        return this.handleFinish();
      if (!this.state.squares[i][j]){
        alert("Nuh Uh, Can't go bacc mah man");
        return;
      }
      var new_squares = this.state.squares.slice();
      new_squares[i][j] = !new_squares[i][j]
      this.setState({
        squares: new_squares,
        x: i,
        y: j,
      });
      return;
    }
    alert("Wait, that is illegal")  
  }
  handleFinish(){
    alert("You win DUN DUN")
  }
  handleIcon(i, j){
    return !this.state.squares[i][j]? 
    (i === this.state.x && j === this.state.y)? <AirportShuttleIcon/>: null:
    (i === this.state.squares.length-1 && j === this.state.squares.length-1)?<AddLocationIcon/>: null;
  }
  handleAI(){

  }
  renderSquare(i, j){
     return (
      <StylesProvider injectFirst>
        <Button 
          onClick={() => this.handleClick(i, j)}
          className= {
            (i === 0 && j === 0)?"button_after":
            (i === this.state.squares.length-1 && j === this.state.squares.length-1)? "button_icon":
            this.state.squares[i][j]?"button_before":
            (i === this.state.x && j === this.state.y)?"button_icon": "button_after"}>
              {this.handleIcon(i, j)}
        </Button>
      </StylesProvider>
     )
  }
  renderBoard(){
    var columns = new Array(9).fill(true);
    var rows = new Array(9).fill(0).map(() => new Array(9).fill(true));
    for (let i = 0; i < this.state.squares.length; i++){
      for (let j = 0; j < this.state.squares[i].length; j++){
        rows[i][j] = this.renderSquare(i, j);
      }
      columns[i] = <div>{rows[i]}</div>
    }
    return columns;
  }
  render(){
    return (
      <div>
        <h1 className='name'>Ride Bus, Ride</h1>
        <div className='center'>{this.renderBoard()}</div>
      </div>
    )
  }
}
ReactDOM.render(
  <html><Board/></html>,
  document.getElementById('root')
);