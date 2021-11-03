import React from 'react';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentId: 1
    };
    this.nextImg = this.nextImg.bind(this);
    this.previousImg = this.previousImg.bind(this);
    this.circleClick = this.circleClick.bind(this);
  }

  nextImg() {
    clearInterval(this.timer);
    if (this.state.currentId === this.props.images.length) {
      this.setState({ currentId: 1 });
    } else {
      this.setState({ currentId: this.state.currentId + 1 });
    }
    this.timerReset();
  }

  previousImg() {
    clearInterval(this.timer);
    if (this.state.currentId === 1) {
      this.setState({ currentId: this.props.images.length });
    } else {
      this.setState({ currentId: this.state.currentId - 1 });
    }
    this.timerReset();
  }

  circleClick(id) {
    clearInterval(this.timer);
    if (this.state.currentId !== id) {
      this.setState({ currentId: id });
    }
    this.timerReset();
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.nextImg(),
      3000
    );
  }

  timerReset() {
    this.timer = setInterval(
      () => this.nextImg(),
      3000
    );
  }

  render() {
    const carousel = this.props.images.map(item =>
        <img key={item.id} src={item.image} alt={item.label} className={this.state.currentId === item.id ? '' : 'hidden'}/>
    );
    const button = this.props.images.map(dot =>
      <li key={dot.id} onClick={() => this.circleClick(dot.id)}>
        <i className={this.state.currentId === dot.id ? 'fas fa-circle' : 'far fa-circle'}></i>
      </li>
    );

    return (
      <div>
        {carousel}
        <a href="#" onClick={this.previousImg}><i className='left-arrow fas fa-chevron-circle-left'></i></a>
        <a href="#" onClick={this.nextImg}><i className='right-arrow fas fa-chevron-circle-right'></i></a>
        <ul>{button}</ul>
      </div>
    );
  }

}

export default Carousel;
