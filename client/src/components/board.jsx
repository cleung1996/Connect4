import React from 'react';
import ReactDOM from 'react-dom';
import BoardColumn from './BoardColumn.jsx';
class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board:  [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [1,0,0,0,0,0]],
      turn: 'blue',
      backgroundColor: {
        'backgroundColor': 'none'
      },

    }
    this.updateBoard = this.updateBoard.bind(this);
    this.columnClick = this.columnClick.bind(this);
  }
  updateBoard(xCoord, yCoord, turn ) {
    var newBoard = [...this.state.board];
    console.log(xCoord,yCoord,turn);

    if(turn === 'blue'){
      newBoard[Number(xCoord)][Number(yCoord)] = 1;
      this.setState({turn: 'red', board: newBoard});
    } else {

      newBoard[Number(xCoord)][Number(yCoord)] = 2;
      this.setState({turn: 'blue', board: newBoard});
    }

    console.log(newBoard);
  }

  columnClick(event, columnNum) {
    console.log('Ive been clicked');
    console.log(event);
    console.log(columnNum);
  }

  render() {
    return(
      <>
      <div className="row">
        <div>C0</div>
        <div className="column" onClick={(event) => this.columnClick(event,0)}>
          <BoardColumn turn={this.state.turn} updateBoard={this.updateBoard}  boardColumn={this.state.board[0]}/>
        </div>
      </div>
      <div className="row">
        <div>C1</div>
        <div className="column" onClick={(event) => this.columnClick(event,1)}>
          <BoardColumn turn={this.state.turn} updateBoard={this.updateBoard} colNum={1}/>
        </div>
      </div>
      <div className="row">
        <div>C2</div>
        <div className="column" onClick={(event) => this.columnClick(event,2)}>
          <BoardColumn turn={this.state.turn} updateBoard={this.updateBoard} colNum={2}/>
        </div>
      </div>
      <div className="row">
        <div>C3</div>
        <div className="column" onClick={(event) => this.columnClick(event,3)}>
          <BoardColumn turn={this.state.turn} updateBoard={this.updateBoard} colNum={3}/>
        </div>
      </div>
      <div className="row">
        <div>C4</div>
        <div className="column" onClick={(event) => this.columnClick(event,4)}>
          <BoardColumn turn={this.state.turn} updateBoard={this.updateBoard} colNum={4}/>
        </div>
      </div>
      <div className="row">
        <div>C5</div>
        <div className="column" onClick={(event) => this.columnClick(event,5)}>
          <BoardColumn turn={this.state.turn} updateBoard={this.updateBoard} colNum={5}/>
        </div>
      </div>
      </>
    )
  }

}

export default Board;