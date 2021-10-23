import React from 'react';
import ReactDOM from 'react-dom';
import Cell from './cell.jsx';

class BoardColumn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      colNum: ["0","1","2","3","4","5","6"],
      backgroundColor: 'none',
    }
  }



  render(){
    return(
      <>
        <div><Cell colNum={this.props.colNum} rowNum={0} turn={this.props.turn} updateBoard={this.props.updateBoard}/></div>
        <div><Cell colNum={this.props.colNum} rowNum={1} turn={this.props.turn} updateBoard={this.props.updateBoard}/></div>
        <div><Cell colNum={this.props.colNum} rowNum={2} turn={this.props.turn} updateBoard={this.props.updateBoard}/></div>
        <div><Cell colNum={this.props.colNum} rowNum={3} turn={this.props.turn} updateBoard={this.props.updateBoard}/></div>
        <div><Cell colNum={this.props.colNum} rowNum={4} turn={this.props.turn} updateBoard={this.props.updateBoard}/></div>
        <div><Cell colNum={this.props.colNum} rowNum={5} turn={this.props.turn} updateBoard={this.props.updateBoard}/></div>
        <div><Cell colNum={this.props.colNum} rowNum={6} turn={this.props.turn} updateBoard={this.props.updateBoard}/></div>
      </>
    )

  }

}

export default BoardColumn;
