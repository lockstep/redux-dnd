import React, { Component } from 'react';
import ItemTypes from './ItemTypes';
import Box from './box.jsx';
import { DropTarget } from 'react-dnd';

const styles = {
  width: 300,
  height: 300,
  border: '1px solid black',
  position: 'relative'
};

const boxTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);

    component.moveBox(item.id, left, top);
  }
};

class DragArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      boxes: {
        'a': { top: 20, left: 80, title: 'Drag me around' },
        'b': { top: 180, left: 20, title: 'Drag me too' }
      }
    };
  }

  moveBox(id, left, top) {
    let boxes = Object.assign({}, this.state.boxes);
    boxes[id] = Object.assign({}, boxes[id], { top, left });
    this.setState({ boxes });
  }

  render() {
    const { connectDropTarget } = this.props;
    const { boxes} = this.state;

    return connectDropTarget(
      <div style={styles}>
        {Object.keys(boxes).map(key => {
          const { left, top, title } = boxes[key];
          return (
            <Box key={key}
                 id={key}
                 left={left}
                 top={top}>
              {title}
            </Box>
          );
        })}
      </div>
    );
  }
}

export default DropTarget(ItemTypes.BOX, boxTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(DragArea);
