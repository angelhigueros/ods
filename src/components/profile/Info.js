import React from "react";

export const Info = ({ user }) => {
  return (
    <React.Fragment>
      <div className="column is-12">
        <span className="title is-4">Biografía</span>
        <hr />
        <p className="has-text-dark is-size-5">{user.split(":")[2]}</p>
      </div>
    </React.Fragment>
  );
};
