import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className="dropdown">
        <button type="button" className="button" onClick={this.toggle}>
          {this.state.visible ? 'Сховати' : 'Показати'}
        </button>
        {this.state.visible && <div className="dropdown__menu">Menu</div>}
      </div>
    );
  }
}

export default Dropdown;
