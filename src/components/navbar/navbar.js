import React from 'react';
import '../../assets/css/navbar.css';
import NavbarContainer from './navbar-container';
import NavbarSeparator from './navbar-separator';
import NavbarIcon from './navbar-icon';

class NavBar extends React.Component {
  state = {
    activeIndex: 0
  }

  onClick = (index) => this.setState({ activeIndex: index });

  render() {
    return (
      <div id="navbar">
        <NavbarContainer className="ml-5" title="Games" big={true} dropdown={true} />
        <NavbarContainer title="Subcategories" dropdown={true} />
        <NavbarSeparator />
        <NavbarContainer index={0} isActive={this.state.activeIndex===0} onClick={this.onClick} title="Home" />
        <NavbarContainer index={1} isActive={this.state.activeIndex===1} onClick={this.onClick} title="Top charts" />
        <NavbarContainer index={2} isActive={this.state.activeIndex===2} onClick={this.onClick} title="New releases" />
        <div id="navbar-right">
          <NavbarIcon iconClass="help-icon"/>
          <NavbarIcon iconClass="settings-icon"/>
        </div>
      </div>
    )
  }
}

export default NavBar;