import React, { useState } from "react";
import { NavbarOptions } from "./NavbarOptions";

// Design
import Logo from "../../assets/img/logo.png";
import "./ui.css";
import { IoMdArrowDropdown } from "react-icons/io";

export const Navbar = () => {
  // Show menu (mobile)
  const handleMenu = () => {
    const overlay = document.getElementById("overlay");
    overlay.classList.toggle("overlay--active");
  };

  // Show menu (deskt)
  const [viewMenu, setViewMenu] = useState(false);

  // Close sessión
  const handleSession = () => {
    window.location.href = "";
  };

  return (
    <React.Fragment>
      <NavbarOptions
        viewMenu={viewMenu}
        setViewMenu={setViewMenu}
        handleSession={handleSession}
      />
      <header className="header">
        <a className="logo" href="/">
          <h2>Educalia</h2>
        </a>
        <nav>
          <ul className="nav__links">
            <li>
              <a href="/">Aprender</a>
            </li>
            <li>
              <a href="/agenda">Agenda</a>
            </li>
            <li>
              <a href="/oportunidades">Oportunidades</a>
            </li>
            <li>
              <a href="/foro">Foro</a>
            </li>
          </ul>
        </nav>
        <span className="NavBar_cart">
          <span
            onClick={() => setViewMenu(true)}
            className="Navbar-menu-container"
          >
            <span>Nombre completo</span>
            <IoMdArrowDropdown size={50} />
          </span>
        </span>

        <a className="menu cta" onClick={handleMenu}>
          Menú
        </a>
      </header>
      <div className="overlay " id="overlay">
        <p href="/" className="close" onClick={handleMenu}>
          &times;
        </p>
        <div className="overlay__content">
          <a href="/">Aprender</a>
          <a href="/agenda">Agenda</a>
          <a href="/oportunidades">Oportunidades</a>
          <a href="/foro">Foro</a>
          <a href="/@usuario">Mi cuenta</a>
        </div>
      </div>
    </React.Fragment>
  );
};
