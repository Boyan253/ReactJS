var rootElement = document.getElementById('root');

var root = ReactDOM.createRoot(rootElement);

// const reactElement = React.createElement('h1', {} , "Hello from ReactJS")


var reactElement = React.createElement(
  'header',
  null,
  React.createElement(
    'h1',
    null,
    'Hello from ReactJS!!!'
  )
);

root.render(reactElement);