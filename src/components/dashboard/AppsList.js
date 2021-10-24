import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

//Design
import "./dashboard.css";
import img from "../../assets/img/curso.png";
import { Link } from "react-router-dom";

export const AppsList = () => {
  const [courses, setCourses] = useLocalStorage("cursos", [
    {
      title: "Curso matemáticas I",
      link: "math",
      key: 1,
    },
    {
      title: "Preparación Universitaria",
      link: "uvg",
      key: 2,
    }, {
      title: "Curso intermedio de ingles",
      link: "english",
      key: 3,
    },
  ]);

  return (
    <React.Fragment>
      <main className="Library-container">
        {/* Header */}
        <div className="level">
          <section className="level-left">
            <span className="subtitle is-3">Mis cursos</span>
          </section>
        </div>
        <hr />
        {/* End Header */}

        {/* courses list */}
        <a className="LibraryItem-container scrollbar">
          {courses.map((course) => (
            <Link to={`/curso/${course.link}`}
              key={course.key}
              className="LibraryItem-item has-text-dark"
            >
              <figure class="image is-64x64">
                <img class="is-rounded" src={img} />
              </figure>
              <div>
                <span className="subtitle is-5">{course.title}</span>
                <br />
                <span>Nivel {course.nivel}</span>
                <br />
                <progress
                  class="progress is-small is-info"
                  value="75"
                  max="100"
                >
                  15%
                </progress>
              </div>
            </Link>
          ))}
        </a>
        {/* End courses list*/}
      </main>
    </React.Fragment>
  );
};
