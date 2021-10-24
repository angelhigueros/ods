import React from 'react'
import { useLocalStorage } from "../../hooks/useLocalStorage";

import img from '../../assets/img/pregunta.jpg'

export const CoursesLists = () => {

  const [posts, setPosts] = useLocalStorage("foro", []);

  return (
    <React.Fragment>
      <div className="column is-12">
        <span className="title is-4">Publicaciones</span>
        <hr /> {/* Contribution */}
        {posts.map(post => (
          <section
            key={post.date}
            className="columns box mb-6"
            style={{ maxHeight: '150px', overflow: 'hidden' }}>
            <div className="column is-3">
              <img
                src={img}
                alt="badge"
                className="image is-96x96"
              />
            </div>
            <div className="column is-8">
              <span className="subtitle is-3">
                <strong>{post.title}</strong>
              </span>
              <br />
            </div>
          </section>
        ))}
        {/* End Contribution */}
      </div>
    </React.Fragment>
  )
}
