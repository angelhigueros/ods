import React from 'react'

//Design
import './dashboard.css'

export const UserCard = () => {
  return (
    <React.Fragment>
      <div className="UserCard-container">
        <a href={`/@usuario`}>
          <figure class="image is-96x96">
            <img class="image is-96x96 is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
        </a>

        <div>
          <span className="subtitle is-4">
            Bienvenido <strong>Nombre completo</strong>
          </span>
          <br />
          <section className="tags has-addons">
            <span class="tag is-white">50 px</span>
            <span className="tag is-success">UVG</span>
            <span className="tag is-info">CCTI</span>
          </section>
        </div>
      </div>
    </React.Fragment>
  )
}
