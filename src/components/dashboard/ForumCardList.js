import React from "react";
import { ForumCard } from "./ForumCard";

//Design
import "./dashboard.css";

export const ForumCardList = () => {
  return (
    <React.Fragment>
      <div className="container ForumCardList_container">
        {/* Filters */}
        <div className="columns">
          <div className="column is-4">
            <a href="/foro/nuevo" className="button is-dark is-fullwidth">
              Iniciar foro
            </a>
          </div>
        </div>
        {/* End Filters */}
        {/* Cards */}
        {[1, 2, 3].map((card) => (
          <ForumCard key={card} />
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
    </React.Fragment>
  );
};
