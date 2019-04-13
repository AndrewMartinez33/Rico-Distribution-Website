import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  ResponsiveMenu() {
    let navLeft = document.querySelector("#nav-left");
    let navLeftItems = document.querySelectorAll(".navigation-item");
    navLeftItems.forEach(item => {
      if (item.classList.contains("responsive-nav-items")) {
        item.classList.remove("responsive-nav-items");
        navLeft.classList.remove("responsive-nav-items-container");
      } else {
        item.classList.add("responsive-nav-items");
        navLeft.classList.add("responsive-nav-items-container");
      }
    });
  }

  ResetNav() {
    let navLeftItems = document.querySelectorAll(".navigation-item");
    if (window.innerWidth >= 768) {
      navLeftItems.forEach(item => {
        item.classList.remove("responsive-nav-items");
      });
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.ResetNav);
  }

  render() {
    return (
      <header>
        <div className="navigation-container">
          <div id="nav-left">
            <Link to="/" id="navigation-logo">
              Rico Distribution
            </Link>
            <Link to="/about" className="navigation-item">
              About
            </Link>
            <Link to="/products" className="navigation-item">
              Products
            </Link>
            <Link to="/water" className="navigation-item">
              Water
            </Link>
            <Link to="/contact" className="navigation-item">
              Contact
            </Link>
            <Link to="/join" className="navigation-item">
              Join
            </Link>
          </div>
          <div onClick={this.ResponsiveMenu} id="nav-hamburger">
            <div className="hamburger" />
            <div className="hamburger" />
            <div className="hamburger" />
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
