import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.iconRef1 = React.createRef();
    this.iconRef2 = React.createRef();
    this.iconRef3 = React.createRef();
    this.menuRef = React.createRef();
  }

  menuIcons = () => {
    this.iconRef1.current.classList.toggle('open');
    this.iconRef2.current.classList.toggle('open');
    this.iconRef3.current.classList.toggle('hidden');
    this.menuRef.current.classList.toggle('slide-left');
  }

  render() {
    return (
      <nav>
        <a href="#Home">
          <img src={logo} alt="logo" width="135" />
        </a>
        <ul ref={this.menuRef}>
          <li>
            <NavLink exact to="/" onClick={this.menuIcons}>home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={this.menuIcons}>about</NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={this.menuIcons}>products</NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={this.menuIcons}>blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" onClick={this.menuIcons}>contact us</NavLink>
          </li>
        </ul>
        <button type="button" className="menu-icons" onClick={this.menuIcons}>
          <span ref={this.iconRef1} />
          <span ref={this.iconRef3} />
          <span ref={this.iconRef2} />
        </button>
      </nav>
    );
  }
}

export default Navbar;
