import React from "react";
import { Navbar } from "./Navbar";

//Design
import "../../assets/css/global.css";

export const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="section-body">
        <Navbar />
        {props.children}
      </div>
    </React.Fragment>
  );
};
