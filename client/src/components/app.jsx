import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      announcement: 'Welcome! Please begin by clicking on a cell. It\'s currently player green\'s turn',
    }
  }

  updateAnnouncement(newText) {

  }

  render() {
    return (
      <div>
        <h1>Connect Four!</h1>
        <h2>{this.state.announcement}</h2>
        <Board/>
      </div>
    )
  }

}

export default App;