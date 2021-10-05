import React from 'react';
import ReactDOM from 'react-dom';

const helloMessage = React.createElement(
  'h1',
  [null],
  ['Hello, React!']
)
;

ReactDOM.render(helloMessage, document.getElementById('root'));
