'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Handle = require('./Handle');

var _Handle2 = _interopRequireDefault(_Handle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Resize = function (_Component) {
  _inherits(Resize, _Component);

  function Resize() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Resize);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Resize.__proto__ || Object.getPrototypeOf(Resize)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      height: _this.props.initialHeight,
      width: _this.props.initialWidth
    }, _this.handleChange = function (width, height) {
      _this.setState({
        width: Math.max(width, _this.props.minWidth),
        height: Math.max(height, _this.props.minHeight)
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Resize, [{
    key: 'render',
    value: function render() {
      var _state = this.state;
      var width = _state.width;
      var height = _state.height;

      var style = _extends({
        margin: 50,
        position: 'relative'
      }, this.props.style, {
        width: width,
        height: height
      });

      return _react2.default.createElement(
        'div',
        { style: style, className: this.props.className },
        this.props.children,
        _react2.default.createElement(_Handle2.default, {
          onChange: this.handleChange,
          width: width,
          height: height,
          style: this.props.handleStyle,
          className: this.props.handleClassName,
          handleColor: this.props.handleColor
        })
      );
    }
  }]);

  return Resize;
}(_react.Component);

Resize.propTypes = {
  initialHeight: _react.PropTypes.number,
  initialWidth: _react.PropTypes.number,
  minHeight: _react.PropTypes.number,
  minWidth: _react.PropTypes.number,
  children: _react.PropTypes.node,
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  handleStyle: _react.PropTypes.object,
  handleClassName: _react.PropTypes.string,
  handleColor: _react.PropTypes.string
};
Resize.defaultProps = {
  initialHeight: 300,
  initialWidth: 300,
  minHeight: 100,
  minWidth: 100
};
exports.default = Resize;