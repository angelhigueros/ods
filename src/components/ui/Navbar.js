import React, { useState } from "react";
import { NavbarOptions } from "./NavbarOptions";
import { useLocalStorage } from "../../hooks/useLocalStorage";

// Design
import "./ui.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [data, setData] = useLocalStorage("user", "");
  const [nombre, usuario] = data.split(":");

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
        <span className="logo ">
          <Link to="/">
            <h1 className="title is-3 has-text-white">Educalia</h1>
          </Link>
        </span>
        <nav>
          <ul className="nav__links">
            <li>
              <Link to="/">Aprender</Link>
            </li>
            <li>
              <Link to="/agenda">Agenda</Link>
            </li>
            <li>
              <Link to="/foro">Foro</Link>
            </li>
          </ul>
        </nav>
        <span className="NavBar_cart">
          <span
            onClick={() => setViewMenu(true)}
            className="Navbar-menu-container"
          >
            <span>{nombre}</span>
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
          <Link to="/">Aprender</Link>
          <Link to="/agenda">Agenda</Link>
          <Link to="/foro">Foro</Link>
          <Link to="/@usuario">Mi cuenta</Link>
        </div>
      </div>
    </React.Fragment>
  );
};
