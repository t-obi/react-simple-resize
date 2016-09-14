import React, { Component, PropTypes } from 'react';
import Handle from './Handle';

class Resize extends Component {

  static propTypes = {
    initialHeight: PropTypes.number,
    initialWidth: PropTypes.number,
    minHeight: PropTypes.number,
    minWidth: PropTypes.number,
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    handleStyle: PropTypes.object,
    handleClassName: PropTypes.string,
    handleColor: PropTypes.string,
  };

  static defaultProps = {
    initialHeight: 300,
    initialWidth: 300,
    minHeight: 100,
    minWidth: 100,
  };

  state = {
    height: this.props.initialHeight,
    width: this.props.initialWidth,
  };

  handleChange = (width, height) => {
    this.setState({
      width: Math.max(width, this.props.minWidth),
      height: Math.max(height, this.props.minHeight),
    });
  };

  render() {
    const { width, height } = this.state;
    const style = {
      margin: 50,
      position: 'relative',
      ...this.props.style,
      width,
      height,
    };

    return (
      <div style={style} className={this.props.className} >
        {this.props.children}
        <Handle
          onChange={this.handleChange}
          width={width}
          height={height}
          style={this.props.handleStyle}
          className={this.props.handleClassName}
          handleColor={this.props.handleColor}
        />
      </div>
    );
  }
}

export default Resize;
