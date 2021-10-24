import React, { useState } from "react";
import { NavbarOptions } from "./NavbarOptions";
import { useLocalStorage } from "../../hooks/useLocalStorage";

// Design
import "./ui.css";
import { IoMdArrowDropdown } from "react-icons/io";

export const Navbar = () => {
  const [data, setData] = useLocalStorage("user");
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
          <h1 className="title is-3 has-text-white">Educalia</h1>
        </span>
        <nav>
          <ul className="nav__links">
            <li>
              <a href="/">Aprender</a>
            </li>
            <li>
              <a href="/agenda">Agenda</a>
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
          <a href="/">Aprender</a>
          <a href="/agenda">Agenda</a>
          <a href="/foro">Foro</a>
          <a href="/@usuario">Mi cuenta</a>
        </div>
      </div>
    </React.Fragment>
  );
};
