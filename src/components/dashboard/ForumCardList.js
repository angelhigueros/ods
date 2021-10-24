import React from "react";
import { ForumCard } from "./ForumCard";

//Design
import "./dashboard.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Link } from "react-router-dom";

export const ForumCardList = () => {
  const [entries, setEntry] = useLocalStorage("foro", []);

  return (
    <>
      <div className="container ForumCardList_container">
        {/* Filters */}
        <div className="columns">
          <div className="column is-4">
            <Link to="/foro/nuevo" className="button is-dark is-fullwidth">
              Iniciar foro
            </Link>
          </div>
        </div>
        {/* End Filters */}
        {/* Cards */}
        {entries.map((card) => (
          <ForumCard key={card.date} {...card} />
        ))}
        {/* End Cards */}
        <br />
        <br />
        {/* Pagination */}
        <nav
          class="pagination is-centered"
          role="navigation"
          aria-label="pagination"
        >
          <a class="pagination-previous">Anterior</a>
          <a class="pagination-next">Siguiente</a>
        </nav>
        {/* EndPagination */}
        <br />
        <br />
      </div>
    </>
  );
};
