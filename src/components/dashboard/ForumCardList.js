import React from 'react'
import { ForumCard } from './ForumCard'

//Design
import './dashboard.css'

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
          <div className="column is-offset-3 is-5">
            Ordenar por: 
            <div className="select">
              <select name="" id="">
                <option value="">Populares</option>
                <option value="">Populares</option>
                <option value="">Populares</option>
                <option value="">Populares</option>
              </select>
            </div>
          </div>
        </div>
        {/* End Filters */}
        {/* Cards */}
        {[1, 2, 3, 4, 5, 6].map(card => (
          <ForumCard key={card} />
        ))}
        {/* End Cards */}
        <br />
        <br />
        {/* Pagination */}
        <nav
          class="pagination is-centered"
          role="navigation"
          aria-label="pagination">
          <a class="pagination-previous">Previous</a>
          <a class="pagination-next">Next page</a>
          <ul class="pagination-list">
            <li>
              <a class="pagination-link" aria-label="Goto page 1">
                1
              </a>
            </li>
            <li>
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 45">
                45
              </a>
            </li>
            <li>
              <a
                class="pagination-link is-current"
                aria-label="Page 46"
                aria-current="page">
                46
              </a>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 47">
                47
              </a>
            </li>
            <li>
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 86">
                86
              </a>
            </li>
          </ul>
        </nav>
        {/* EndPagination */}
        <br />
        <br />
      </div>
    </React.Fragment>
  )
}
