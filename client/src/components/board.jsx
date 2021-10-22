import React from 'react';
import ReactDOM from 'react-dom';
import BoardRow from './boardRow.jsx';
class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board:  [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]],
      turn: 'blue',
    }
    this.updateBoard = this.updateBoard.bind(this);
  }
  updateBoard(xCoord, yCoord, turn ) {
    var newBoard = [...this.state.board];
    console.log(xCoord,yCoord,turn);

    if(turn === 'blue'){
      newboard[Number(xCoord)][Number(yCoord)] = 1;
      this.setState({turn: 'red', board: newBoard});
    } else {

      newBoard[Number(xCoord)][Number(yCoord)] = 2;
      this.setState({turn: 'blue', board: newBoard});
    }

    console.log(newBoard);
  }

  determineColumnWinner(color, position) {

  }

  render() {
    return(
      <>
      <div className="row">
        <div>R0</div>
        <BoardRow turn={this.state.turn} updateBoard={this.updateBoard}/>
      </div>
      <div className="row">
        <div>R1</div>
        <BoardRow turn={this.state.turn} updateBoard={this.updateBoard}/>
      </div>
      <div className="row">
        <div>R2</div>
        <BoardRow turn={this.state.turn} updateBoard={this.updateBoard}/>
      </div>
      <div className="row">
        <div>R3</div>
        <BoardRow turn={this.state.turn} updateBoard={this.updateBoard}/>
      </div>
      <div className="row">
        <div>R4</div>
        <BoardRow turn={this.state.turn} updateBoard={this.updateBoard}/>
      </div>
      <div className="row">
        <div>R5</div>
        <BoardRow turn={this.state.turn} updateBoard={this.updateBoard}/>
      </div>
      </>
    )
  }

}

export default Board;