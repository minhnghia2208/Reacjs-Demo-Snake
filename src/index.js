import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { StylesProvider } from "@material-ui/core/styles";
import './index.css';

class Square extends React.Component{
  constructor(props){
    super(props);
    this.state = { value: this.props.value};
  }
  handleClick() {
    this.setState({value: !this.state.value});
  }
  render(){
    return (
      <StylesProvider injectFirst>
        <Button 
          onClick={() => this.handleClick()}
          className= {this.state.value? "button_before": "button_after"}>
          {this.props.value}
        </Button>
      </StylesProvider>
    )}
}
class Board extends React.Component{
  renderBoard(){
    
  }
  render(){
    var rows = new Array(9);
    for (let i = 0; i < rows.length; i++){    
      rows[i] = i===0 ? <div><Square value = {false}/>{new Array(8).fill(<Square value = {true}/>)}</div>:
      <div>{new Array(9).fill(<Square value = {true}/>)}</div>;
    }
    return (
      <div>
        <h1 className='name'>EDVENTUR UFF DA SNAKEE</h1>
        <div className='center'>{rows}</div>
      </div>
    )
  }

}
ReactDOM.render(
  <html><Board/></html>,
  document.getElementById('root')
);
