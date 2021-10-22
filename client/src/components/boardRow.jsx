import React from 'react';
import ReactDOM from 'react-dom';
import Cell from './cell.jsx';

class BoardRow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      colNum: ["0","1","2","3","4","5","6"]

    }
  }
  render(){
    return(
      <>
      <div><Cell colNum={this.state.colNum[0]} turn={this.props.turn} updateBoard={this.props.updateBoard}/></div>
      <div><Cell colNum={this.state.colNum[1]} turn={this.props.turn} updateBoard={this.props.updateBoard}/></div>
      <div><Cell colNum={this.state.colNum[2]} turn={this.props.turn} updateBoard={this.props.updateBoard}/></div>
      <div><Cell colNum={this.state.colNum[3]} turn={this.props.turn} updateBoard={this.props.updateBoard}/></div>
      <div><Cell colNum={this.state.colNum[4]} turn={this.props.turn} updateBoard={this.props.updateBoard}/></div>
      <div><Cell colNum={this.state.colNum[5]} turn={this.props.turn} updateBoard={this.props.updateBoard}/></div>
      <div><Cell colNum={this.state.colNum[6]} turn={this.props.turn} updateBoard={this.props.updateBoard}/></div>
      </>
    )

  }

}

export default BoardRow;
