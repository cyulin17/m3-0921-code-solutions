import React from 'react';

class AppDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isClosed: true
    };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event) {
    event.stopPropagation();
    this.setState(prevState => ({
      isClosed: !prevState.isClosed
    }));
  }

  render() {

    let drawerStatus = '';
    let background = '';
    if (this.state.isClosed) {
      drawerStatus = 'drawer closed';
    } else {
      drawerStatus = 'drawer opened';
      background = 'shadow';
    }
    return (
      <div onClick={this.handleClick} className={background}>
          <div onClick={this.handleClick} className='menuBar'><i className='fas fa-bars fa-2x'></i></div>
        <div onClick={this.handleClick} className={drawerStatus}>
            <ul>Menu
            <li><a href='#'>About</a></li>
            <li><a href='#'>Get Started</a></li>
            <li><a href='#'>Sign In</a></li>
            </ul>
          </div>
      </div>
    );
  }
}
export default AppDrawer;
