import React from 'react'

//Design
import { AiFillHeart, AiFillMessage } from 'react-icons/ai'

export const Posts = () => {
  return (
    <React.Fragment>
      <div className="column is-12">
        <span className="title is-4">Publicaciones</span>
        <hr />
        {[1, 2, 3, 4, 5].map(contribution => (
          <a
          href="/hilo/10"
            key={contribution}
            className="columns box mb-6"
            style={{ maxHeight: '150px', overflow: 'hidden' }}>
            <div className="column is-8">
              <span className="subtitle is-5">
                <strong> Curso matematicas aplicada I</strong>
              </span>
              <br />
            </div>
            <div className="column is-2">
              <a href="/">
                <AiFillHeart size={30} className="has-text-danger" /> 25
              </a>
            </div>
            <div className="column is-2">
              <a href="/">
                <AiFillMessage size={30} className="has-text-link" /> 15
              </a>
            </div>
          </a>
        ))}
        {/* End Contribution */}
      </div>
    </React.Fragment>
  )
}
