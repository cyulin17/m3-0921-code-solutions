import React from 'react';
import ReactDom from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    return (
      <button onClick={ this.handleClick }> {this.state.isClicked ? 'Thanks!' : 'Click Me!'} </button>
    );
  }
}

const element = (
  <div>
    <CustomButton />
  </div>
);

ReactDom.render(
  element,
  document.querySelector('#root')
);
