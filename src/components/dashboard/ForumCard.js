import React from 'react'

//Design
import { AiFillHeart } from 'react-icons/ai'
import './dashboard.css'

export const ForumCard = () => {
  return (
    <React.Fragment>
      <a href="/hilo/10" class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="Image"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p className="has-text-dark">
                <strong>Nombre completo</strong> <small>@usuario</small>
                <small>12 horas</small>
                <br />
                <span className="subtitle is-3">Titulo</span>
                <br />
                <br />
                <div class="tags">
                  <span class="tag is-dark">One</span>
                  <span class="tag is-success">Two</span>
                  <span class="tag is-info">Three</span>
                  <span class="tag is-warning">Four</span>
                  <span class="tag is-light">Five</span>
                  <span class="tag is-link">Six</span>
                  <span class="tag is-primary">Seven</span>
                </div>
              </p>
            </div>
          </div>
          
        </article>
      </a>
    </React.Fragment>
  )
}
