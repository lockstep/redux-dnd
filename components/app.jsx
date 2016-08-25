import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class App extends Component {
  render() {
    return <div>
      <h1>Layout</h1>
      { this.props.children }
    </div>;
  }
}

export default DragDropContext(HTML5Backend)(App);
