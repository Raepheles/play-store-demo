import React from 'react';
import '../../assets/css/navbar.css';

class NavbarSeparator extends React.Component {
  render() {
    let classes = this.props.className || '';
    return (
      <div className={`nav-item-container ${classes}`}>
        <div className="nav-separator">
        </div>
      </div>
    )
  }
}

export default NavbarSeparator;