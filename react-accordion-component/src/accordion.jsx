import React from 'react';

class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
