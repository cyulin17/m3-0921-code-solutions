import React from 'react';

class ToggleSwitch extends React.Component {

  constructor(props) {
    super(props);
    this.state = { toggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      toggleOn: !prevState.toggleOn
    }));
  }

  render() {

    const toggleStatus = 'text';
    let switchButton = '';
    let label = '';
    if (!this.state.toggleOn) {
      switchButton = 'button off';
      label = 'OFF';
    } else {
      switchButton = 'button';
      label = 'ON';
    }

    return (
    <div>
        <span onClick={this.handleClick} className={switchButton}></span>
        <span className={toggleStatus}>{label}</span>
    </div>
    );
  }
}
export default ToggleSwitch;
