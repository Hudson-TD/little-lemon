import React from "react";

function Nav() {
  return (
    <nav className="navbar">
      <img
        src="https://4m4you.com/wp-content/uploads/2020/06/logo-placeholder.png"
        alt="Little Lemon Logo"
      />
      <ul className="navbarUl">
        <li className="navbarItem">
          <a className="navbarLink" href="#Home">
            Home
          </a>
        </li>
        <li className="navbarItem">
          <a className="navbarLink" href="#AboutUs">
            About
          </a>
        </li>
        <li className="navbarItem">
          <a className="navbarLink" href="#Menu">
            Menu
          </a>
        </li>
        <li className="navbarItem">
          <a className="navbarLink" href="#Reservations">
            Reservations
          </a>
        </li>
        <li className="navbarItem">
          <a className="navbarLink" href="#Order Online">
            Order Online
          </a>
        </li>
        <li className="navbarItem">
          <a className="navbarLink" href="#Login">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

// TODO: replace logo on line 6
