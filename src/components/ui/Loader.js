import React from 'react'
//Design
import './ui.css'

export const Loader = () => {
  return (
    <React.Fragment>
      <div className="preloader-container">
        <div className="container-preloader">
          <div className="moon">
            <div className="crater c1"></div>
            <div className="crater c2"></div>
            <div className="crater c3"></div>
            <div className="crater c4"></div>
            <div className="crater c5"></div>
            <div className="shadow"></div>
            <div className="eye el"></div>
            <div className="eye er"></div>
            <div className="mouth"></div>
            <div className="blush b1"></div>
            <div className="blush b2"></div>
          </div>
          <div className="orbit">
            <div className="rocket">
              <div className="window"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
