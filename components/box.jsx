import React, { Component } from 'react';
import ItemTypes from './ItemTypes';
import { DragSource } from 'react-dnd';

const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
};

const boxSource = {
  beginDrag(props) {
    const { id, left, top } = props;
    return { id, left, top };
  }
};

class Box extends Component {

  render() {
    const { left, top, connectDragSource, isDragging, children } = this.props;
    if (isDragging) {
      return null;
    }
    const boxStyle = Object.assign({}, style, { top, left })
    return connectDragSource(
      <div style={boxStyle}>
        {children}
      </div>
    );
  }
}
export default DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(Box)
