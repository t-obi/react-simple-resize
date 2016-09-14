'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Handle = function (_Component) {
  _inherits(Handle, _Component);

  function Handle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Handle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Handle.__proto__ || Object.getPrototypeOf(Handle)).call.apply(_ref, [this].concat(args))), _this), _this.handleDragStart = function (event) {
      _this.dragStartMousePositionX = event.screenX;
      _this.dragStartHandlePositionX = _this.props.width;
      _this.dragStartMousePositionY = event.screenY;
      _this.dragStartHandlePositionY = _this.props.height;
      _this.dragListener = document.addEventListener('mouseup', _this.handleDragEnd);
      _this.dragEndListener = document.addEventListener('mousemove', _this.handleDrag);
    }, _this.handleDragEnd = function () {
      document.removeEventListener('mousemove', _this.handleDrag);
      document.removeEventListener('mouseup', _this.handleDragEnd);
      _this.dragListener = null;
      _this.dragEndListener = null;
    }, _this.handleDrag = function (event) {
      var nextWidth = _this.dragStartHandlePositionX + event.screenX - _this.dragStartMousePositionX;
      var nextHeight = _this.dragStartHandlePositionY + event.screenY - _this.dragStartMousePositionY;
      _this.props.onChange(nextWidth, nextHeight);
      event.preventDefault(); // prevents text selection during drag
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Handle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.dragStartMousePositionX = 0;
      this.dragStartHandlePositionX = 0;
      this.dragStartMousePositionY = 0;
      this.dragStartHandlePositionY = 0;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousemove', this.handleDrag);
      document.removeEventListener('mouseup', this.handleDragEnd);
    }
  }, {
    key: 'render',
    value: function render() {
      var style = _extends({
        position: 'absolute',
        bottom: 0,
        right: 0,
        cursor: 'se-resize',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 0 20px 20px',
        borderColor: 'transparent transparent ' + this.props.handleColor + ' transparent'
      }, this.props.style);

      return _react2.default.createElement('div', {
        className: this.props.className,
        style: style,
        onMouseDown: this.handleDragStart
      });
    }
  }]);

  return Handle;
}(_react.Component);

Handle.propTypes = {
  width: _react.PropTypes.number.isRequired,
  height: _react.PropTypes.number.isRequired,
  onChange: _react.PropTypes.func.isRequired,
  style: _react.PropTypes.object,
  handleColor: _react.PropTypes.string,
  className: _react.PropTypes.string
};
Handle.defaultProps = {
  handleColor: 'black'
};
exports.default = Handle;