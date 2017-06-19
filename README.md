# React Simple Resize
A simple resizable container in React

## Demo
[http://tkloht.github.io/react-simple-resize](http://tkloht.github.io/react-simple-resize)

## Installation
```shell
npm install --save react-simple-resize
```

## Basic Usage
```js
<Resize>
  hello world!
</Resize>
```
Instead of "hello world!" your can use any other children.

## Props

### initialHeight
**type:** Number  
**default:**  300 

### initialWidth
**type:** Number  
**default:**  300 

### minHeight
**type:** Number  
**default:**  100 

### minWidth
**type:** Number  
**default:**  100 

### children
**type:** Node  

### style
**type:** Object

### className
**type:** String  

### handleStyle
**type:** Object 

### handleClassName
**type:** String  

### handleColor
**type:** String  

## Development
To start a webpack-dev-server with the examples:
```shell
npm start
```
Then open `http://localhost:3000`

To build the examples:
```shell
npm run build-examples
```
You can find the results in `dist_examples`.

To build the Component as published to npm:
```shell
npm run build
```
You can find the results in `dist`.

## Contact
Find me on [Twitter](https://twitter.com/tkloht) or write me an [email](mailto:tobias.kloht@gmail.com).
Of course you can also use Github issues or open a pull request.

Honestly, it would be really great to know if anyone actually uses my little component. I'm also happy to help if you run into any problems.

## License
MIT
