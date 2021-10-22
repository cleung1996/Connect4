import React from 'react';
import ReactDOM from 'react-dom';

class Cell extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      backgroundColor: {
        'background-color': 'white'
      },
      rowNum: 5,

    }

    this.cellClick = this.cellClick.bind(this);
  }

  cellClick(event, xCoord, yCoord) {
    console.log('ive been clicked', xCoord,yCoord);
    console.log(event);
    var turnClick = event.target.attributes.style.value.slice(18,-1);
    console.log(turnClick);

    if(xCoord >= 0 ) {
     if(this.props.turn=== 'blue') {
      var newObj = {
        'background-color' : 'red'
      };
      var newRowNum = this.state.rowNum -= 1
      this.setState(
        { backgroundColor: newObj,
          rowNum: newRowNum
      });
      this.props.updateBoard(xCoord, yCoord, this.props.turn);
    } else {
      var newObj = {
        'background-color' : 'blue'
      };
      var newRowNum = this.state.rowNum -= 1
      this.setState(
        { backgroundColor: newObj,
          rowNum: newRowNum
      });
      this.props.updateBoard(xCoord, yCoord, this.props.turn);

    }
  } else {
    console.log('error, overflowed');
  }

  }

  render(){

    return(
      <>
        <div class="cell" id={this.state.rowNum.toString() + this.props.colNum.toString()} style={this.state.backgroundColor} datax={this.state.rowNum} datay={this.props.colNum} onClick={(event) => this.cellClick(event,event.target.attributes.datax.value, event.target.attributes.datay.value)}/>
      </>
    )
  }

}

export default Cell;
