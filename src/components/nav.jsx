import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isActive: false
    }
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {

    const {isActive} = this.state;

    return (
    <div>
    <div className="wrapper_toggle full_width fixed_width">
      <div
      className={ `menu_toggle ${ isActive ? 'active' : '' }` }
      onClick={ (e) => this.handleToggle(e) }>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div className={ `container_nav full_width ${ isActive ? 'show_menu' : '' }` }
    >
    <div className="inner_nav fixed_width">
      <nav>
        <ul className="">
          <li><Link to="/">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
    </div>
    </div>
    </div>

    );
  }
}
