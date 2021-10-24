import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

//Design
import "./profile.css";

export const Hero = () => {
  const [data, setData] = useLocalStorage("user");

  const [nombre, usuario] = data.split(":");

  const [user, setUser] = useState({
    username: usuario,
    score: 100,
    university: nombre,
  });

  return (
    <>
      <div className="HeroUser-container">
        {/* Hero */}
        <section class="section">
          <div class="columns">
            <div class="column is-12">
              <figure className="image is-3by1">
                <img
                  src="https://wallpaperaccess.com/full/1111946.jpg"
                  alt="Cover"
                />
              </figure>
            </div>
          </div>
          <div class="columns is-flex is-centered HeroUser-user-icon">
            <figure class="image">
              <img
                style={{ height: "256px", width: "256px" }}
                class="image is-rounded"
                src="https://bulma.io/images/placeholders/256x256.png"
                alt="Profile"
              />
            </figure>
            <br />
          </div>
          <div className="has-text-centered">
            <span className="subtitle is-2">{user.name}</span>
            <br />
            <span className="subtitle is-5">
              @{user.username} | {user.score}px
            </span>
          </div>
        </section>
        {/* End Hero */}

        {/* Accions buttons */}
        <section class="section HeroUser-Buttons">
          <div className="level is-fullwidth">
            <div className="level-left">
              <button className="button is-success is-small">
                {user.university}
              </button>
            </div>
          </div>
        </section>
        {/* End Accions buttons */}
      </div>
    </>
  );
};
