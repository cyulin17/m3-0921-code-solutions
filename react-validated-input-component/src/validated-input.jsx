import React from 'react';

class ValidatedInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      message: 'A password is required.',
      status: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const check = event.target.value.length;
    const input = event.target.value;
    const digit = /\d/;
    const capitalLetter = /[A-Z]/;
    const specialCharacter = /[!@#$%^&*()]/;
    const hasNumber = digit.test(input);
    const uppercased = capitalLetter.test(input);
    const character = specialCharacter.test(input);

    if (check < 8) {
      this.setState({
        password: event.target.value,
        message: 'Your password is too short.'
      });
    } else if (hasNumber === true && uppercased === false && character === false) {
      this.setState({
        password: event.target.value,
        message: 'A capital letter and a special chracter are required',
        status: false
      });
    } else if (hasNumber === false && uppercased === true && character === false) {
      this.setState({
        password: event.target.value,
        message: 'A digit and a special character are required.',
        status: false
      });
    } else if (hasNumber === false && uppercased === false && character === true) {
      this.setState({
        password: event.target.value,
        message: 'A digit and a capital character are required.',
        status: false
      });
    } else if (hasNumber === true && uppercased === true && character === false) {
      this.setState({
        password: event.target.value,
        message: 'A special character is required.',
        status: false
      });
    } else if (hasNumber === false && uppercased === true && character === true) {
      this.setState({
        password: event.target.value,
        message: 'A digit is required.',
        status: false
      });
    } else if (hasNumber === true && uppercased === false && character === true) {
      this.setState({
        password: event.target.value,
        message: 'A digit is required.',
        status: false
      });
    } else if (hasNumber === false && uppercased === false && character === false) {
      this.setState({
        password: event.target.value,
        message: 'A digit, capital letter and a special letter are required.',
        status: false
      });
    } else {
      this.setState({
        password: event.target.value,
        message: '',
        status: true
      });
    }
  }

  render() {
    let statusButton = '';
    if (this.state.status) {
      statusButton = 'fas fa-check fa-lg';
    } else {
      statusButton = 'fas fa-times fa-lg';
    }

    return (
      <div>
        <div><label htmlFor="password">Password</label></div>
        <input onChange={this.handleChange} type="password" name="password" value={this.state.password}></input>
        <span><i className={statusButton}></i></span>
        <p>{this.state.message}</p>
      </div>
    );

  }
}

export default ValidatedInput;
