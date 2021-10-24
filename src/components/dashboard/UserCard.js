import React from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";

//Design
import "./dashboard.css";

export const UserCard = () => {
  const [user, setUser] = useLocalStorage("user");

  const [nombre, usuario] = user.split(":");

  return (
    <>
      <div className="UserCard-container">
        <Link to={`/@${usuario}`}>
          <figure class="image is-96x96">
            <img
              class="image is-96x96 is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
        </Link>

        <div>
          <span className="subtitle is-4">
            Bienvenido <strong>{nombre}</strong>
          </span>
          <br />
          <section className="tags has-addons">
            <span className="tag is-info">{usuario}</span>
          </section>
        </div>
      </div>
    </>
  );
};
