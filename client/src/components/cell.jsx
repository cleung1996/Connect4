import React from 'react';
import ReactDOM from 'react-dom';

class Cell extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      backgroundColor: {
        'backgroundColor': 'none'
      },

    }

    // this.cellClick = this.cellClick.bind(this);
  }

  // cellClick(event, xCoord, yCoord) {
  //   console.log('ive been clicked', xCoord,yCoord);
  //   console.log(event);
  //   var turnClick = event.target.attributes.style.value.slice(18,-1);
  //   console.log(turnClick);

  //   if(xCoord >= 0 ) {
  //    if(this.props.turn=== 'blue') {
  //     var newObj = {
  //       'backgroundColor' : 'red'
  //     };
  //     var newRowNum = this.state.rowNum -= 1
  //     this.setState(
  //       { backgroundColor: newObj,
  //         rowNum: newRowNum
  //     });
  //     this.props.updateBoard(xCoord, yCoord, this.props.turn);
  //   } else {
  //     var newObj = {
  //       'backgroundColor' : 'blue'
  //     };
  //     var newRowNum = this.state.rowNum -= 1
  //     this.setState(
  //       { backgroundColor: newObj,
  //         rowNum: newRowNum
  //     });
  //     this.props.updateBoard(xCoord, yCoord, this.props.turn);

  //   }
  // } else {
  //   console.log('error, overflowed');
  // }

  // }

  render(){
    if(this.props.board[i][j] === 0) {
      this.setState({backgroundColor:'none'})
    } else if (this.props.board[i][j] === 1) {
      this.setState({backgroundColor:'blue'})
    }

    return(
      <>
        <div className="cell" style={ } datay={this.props.rowNum} datax={this.props.colNum} />
      </>
    )
  }

}

export default Cell;

// onClick={(event) => this.cellClick(event,event.target.attributes.datax.value, event.target.attributes.datay.value)}