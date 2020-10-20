import React from 'react';
import '../../assets/css/navbar.css';
import ArrowDown from './arrow-down';

class NavbarContainer extends React.Component {
  onClick = () => this.props.onClick ? this.props.onClick(this.props.index) : null;

  dropdownArrow() {
    if(this.props.dropdown) return <ArrowDown />
    else return;
  }

  render() {
    let classes = this.props.className || '';
    let activeClass = this.props.isActive ? 'nav-active' : '';
    return (
      <div className={`nav-item-container noselect ${activeClass} ${classes}`}>
        <div onClick={this.onClick} className={`nav-item ${this.props.big ? "nav-item-big" : ""}`}>
          {this.props.title}
          {this.dropdownArrow()}
        </div>
      </div>
    )
  }
}

export default NavbarContainer;