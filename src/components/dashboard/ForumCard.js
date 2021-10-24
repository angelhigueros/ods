import React from "react";

//Design
import "./dashboard.css";
import question from '../../assets/img/pregunta.jpg'
import { Link } from "react-router-dom";

export const ForumCard = ({ title, date, user, name, id }) => {
  return (
    <React.Fragment>
      <Link to={`/hilo/${id}`} class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                src={question}
                alt="Image"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p className="has-text-dark">
                <strong>{name}</strong> <small>@{user}</small> 
                <small>{date}</small>
                <br />
                <span className="subtitle is-3">{title}</span>
                <br />
                <br />
                <div class="tags">
                  <span class="tag is-dark">One</span>
                  <span class="tag is-success">Two</span>
                  <span class="tag is-info">Three</span>
                </div>
              </p>
            </div>
          </div>
        </article>
      </Link>
    </React.Fragment>
  );
};
