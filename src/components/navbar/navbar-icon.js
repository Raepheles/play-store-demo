import React from 'react';
import '../../assets/css/navbar.css';

class NavbarIcon extends React.Component {
  render() {
    let classes = this.props.className || '';
    return (
      <div className={`nav-icon-container ${classes}`}>
        <span className={this.props.iconClass}></span>
      </div>
    )
  }
}

export default NavbarIcon;