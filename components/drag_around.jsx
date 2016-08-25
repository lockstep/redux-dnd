import React, { Component } from 'react';
import DragArea from './drag_area.jsx';
import { Link } from 'react-router';

class DragAround extends Component {
  render() {
    return <div>
      <DragArea />
      <Link to="/">Home</Link>
    </div>;
  }
}

export default DragAround;
