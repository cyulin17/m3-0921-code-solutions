import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>Click Me!</button>;
}

const element = <CustomButton />;
const container = document.getElementById('root');

ReactDOM.render(element, container);
