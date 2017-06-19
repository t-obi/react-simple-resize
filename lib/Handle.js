import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Handle extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.object,
    handleColor: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    handleColor: 'black',
  }

  componentDidMount() {
    this.dragStartMousePositionX = 0;
    this.dragStartHandlePositionX = 0;
    this.dragStartMousePositionY = 0;
    this.dragStartHandlePositionY = 0;
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.handleDragEnd);
  }

  handleDragStart = (event) => {
    this.dragStartMousePositionX = event.screenX;
    this.dragStartHandlePositionX = this.props.width;
    this.dragStartMousePositionY = event.screenY;
    this.dragStartHandlePositionY = this.props.height;
    this.dragListener = document.addEventListener('mouseup', this.handleDragEnd);
    this.dragEndListener = document.addEventListener('mousemove', this.handleDrag);
  };

  handleDragEnd = () => {
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.handleDragEnd);
    this.dragListener = null;
    this.dragEndListener = null;
  };

  handleDrag = event => {
    const nextWidth = this.dragStartHandlePositionX + event.screenX - this.dragStartMousePositionX;
    const nextHeight = this.dragStartHandlePositionY + event.screenY - this.dragStartMousePositionY;
    this.props.onChange(nextWidth, nextHeight);
    event.preventDefault(); // prevents text selection during drag
  }

  render() {
    const style = {
      position: 'absolute',
      bottom: 0,
      right: 0,
      cursor: 'se-resize',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '0 0 20px 20px',
      borderColor: `transparent transparent ${this.props.handleColor} transparent`,
      ...this.props.style,
    };

    return (
      <div
        className={this.props.className}
        style={style}
        onMouseDown={this.handleDragStart}
      />
    );
  }
}

export default Handle;
