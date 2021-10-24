import React from 'react'

//Design
import './dashboard.css'
import { IoIosAdd } from 'react-icons/io'

export const AppsList = () => {
  return (
    <React.Fragment>
      <main className="Library-container">
        {/* Header */}
        <div className="level">
          <section className="level-left">
            <span className="subtitle is-3">Mis cursos</span>
          </section>
          <section className="level-right">
            <a href="/cursos">
              <IoIosAdd size={30} />
            </a>
          </section>
        </div>
        <hr />
        {/* End Header */}

        {/* courses list */}
        <a className="LibraryItem-container scrollbar">
          {[1, 2, 3, 4, 5].map(course => (
            <a
              href="https://www.youtube.com/channel/UC0u3Jl3x6e6i5DQlyLObsgg"
              key={course}
              className="LibraryItem-item has-text-dark">
              <figure class="image is-64x64">
                <img
                  class="is-rounded"
                  src="https://static.platzi.com/media/learningpath/badges/5c2002b2-da88-420a-943a-c03c61a7a2e8.jpg"
                />
              </figure>
              <div>
                <span className="subtitle is-5">Matematica aplicada I</span>
                <br />
                <span>Nivel avanzado</span>
                <br />
                <progress
                  class="progress is-small is-info"
                  value="75"
                  max="100">
                  15%
                </progress>
              </div>
            </a>
          ))}
        </a>
        {/* End courses list*/}
      </main>
    </React.Fragment>
  )
}
