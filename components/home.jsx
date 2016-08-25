import React, { Component } from 'react';
import { Link } from 'react-router'

class Home extends Component {
  render() {
    return (
      <div>
        <p>Home Page</p>
        <Link to="/dnd">Drag Around</Link>
      </div>
    )
  }
}

export default Home;
