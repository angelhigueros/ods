import React from 'react'

//Design
import './ui.css'
import { FaUserAlt } from 'react-icons/fa'
import { AiFillMessage } from 'react-icons/ai'
import { MdSend } from 'react-icons/md'
import { FaBook } from 'react-icons/fa'

export const NavbarOptions = ({ viewMenu, setViewMenu }) => {
  return (
    <React.Fragment>
      {viewMenu ? (
        <div className="NavbarMenu-container">
          <div className="columns">
            <div
              className="column is-9"
              onClick={() => setViewMenu(false)}></div>
            <div className="column is-3 NavbarMenu-menu">
              <div class="card NavbarMenu-menu-card">
                <div class="card-content">
                  <span className="subtitle is-4">
                    Hola, <strong>Nombre completo</strong>
                  </span>
                  <hr class="dropdown-divider" />
                  <br />
                  {/* Categoria */}
                  <div className="columns is-size-5">
                    <div className="column is-1">
                      <FaUserAlt />
                    </div>
                    <a href="/@usuario" className="column is-1">
                      Perfil
                    </a>
                  </div>
                  {/* End Categoria */}
                
                  
                </div>
                <footer class="card-footer">
                  <p class="card-footer-item">
                    <a
                      className="has-text-centered has-text-danger">
                      Documentación
                    </a>
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </React.Fragment>
  )
}
