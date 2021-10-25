import React from 'react';

class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      id: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {

    if (this.state.id === id) {
      this.setState({
        id: null
      });
    } else {
      this.setState({
        id: id
      });
    }

    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));

  }

  render() {
    const accordion = this.props.topics.map(topic =>
      <div key={topic.id} className='item'>
        <div onClick={() => this.handleClick(topic.id)} className='header'>{topic.title}</div>
        <div className={this.state.id === topic.id ? 'content' : 'hidden'}>{topic.content}</div>
      </div>
    );
    return (
      <div>
        {accordion}
      </div>
    );
  }
}

export default Accordion;
