import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarStart,
  NavbarLink,
  NavbarEnd,
  NavbarDropdown,
  NavbarBurger,
  NavbarDivider
} from "bloomer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavbarComponent extends Component {
  state = {
    isActive: false
  };
  onClickNav = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    return (
      <Navbar isTransparent="true">
        <NavbarBrand>
          <NavbarItem>Quiz</NavbarItem>
          <NavbarItem isHidden="desktop">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </NavbarItem>
          <NavbarBurger
            isActive={this.state.isActive}
            onClick={this.onClickNav}
          />
        </NavbarBrand>
        <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
          <NavbarStart>
            <NavbarItem href="#/">Home</NavbarItem>
            <NavbarItem hasDropdown isHoverable>
              <NavbarLink href="#/documentation">Documentation</NavbarLink>
              <NavbarDropdown>
                <NavbarItem href="#/">One A</NavbarItem>
                <NavbarItem href="#/">Two B</NavbarItem>
                <NavbarDivider />
                <NavbarItem href="#/">Two A</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem href="https://github.com/misho85" isHidden="touch">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}

export default NavbarComponent;
