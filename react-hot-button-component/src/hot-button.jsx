import React from 'react';

class HotButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = { click: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => ({
      click: this.state.click + 1
    }));
  }

  render() {

    let buttonStyle = '';
    const clickCount = this.state.click;

    if (clickCount >= 3 && clickCount < 6) {
      buttonStyle = 'midnightblue';
    } else if (clickCount >= 6 && clickCount < 9) {
      buttonStyle = 'slateblue';
    } else if (clickCount >= 9 && clickCount < 12) {
      buttonStyle = 'indianred';
    } else if (clickCount >= 12 && clickCount < 15) {
      buttonStyle = 'sandybrown';
    } else if (clickCount >= 15 && clickCount < 18) {
      buttonStyle = 'yellow';
    } else if (clickCount >= 18) {
      buttonStyle = 'white';
    }

    return (
      <button onClick={this.handleClick} className={buttonStyle}>
        Hot Button</button>
    );
  }
}
export default HotButton;
