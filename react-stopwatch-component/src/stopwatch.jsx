import React from 'react';

class Stopwatch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      running: false,
      elapsedSeconds: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    if (this.state.running) {
      clearInterval(this.timer);
      this.setState({ running: !this.state.running });
    } else {
      this.timer = setInterval(() => this.setState(
        {
          running: true,
          elapsedSeconds: this.state.elapsedSeconds + 1
        }), 1000);
    }
  }

  reset() {
    this.setState({
      running: false,
      elapsedSeconds: 0
    });
  }

  render() {
    let buttonStatus = '';
    if (this.state.running) {
      buttonStatus = 'fas fa-pause fa-2x';
    } else {
      buttonStatus = 'fas fa-play fa-2x';
    }

    return (
      <div>
        <div onClick={this.reset} className='watch'>{this.state.elapsedSeconds}</div>
        <button onClick={this.handleClick}><i className={buttonStatus}></i></button>
      </div>
    );
  }
}
export default Stopwatch;
