import React from 'react'

export const CoursesLists = () => {
  return (
    <React.Fragment>
      <div className="column is-12">
        <span className="title is-4">Cursos aprobados</span>
        <hr /> {/* Contribution */}
        {[1, 2, 3, 4, 5].map(contribution => (
          <section
            key={contribution}
            className="columns box mb-6"
            style={{ maxHeight: '150px', overflow: 'hidden' }}>
            <div className="column is-3">
              <img
                src="https://static.platzi.com/media/learningpath/badges/10.png"
                alt="badge"
                className="image is-96x96"
              />
            </div>
            <div className="column is-8">
              <span className="subtitle is-3">
                <strong> Curso matematicas aplicada I</strong>
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
