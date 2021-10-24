import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

//Design
import { AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Posts = () => {
  const [portafolio, setPortafolio] = useLocalStorage("portafolio", []);

  return (
    <React.Fragment>
      <div className="column is-12">
        <span className="title is-4">Portafolio</span>
        <hr />
        {portafolio.map((item) => (
          <Link to={item.title}
            key={item.title}
            className="columns box mb-6"
            style={{ maxHeight: "150px", overflow: "hidden" }}
          >
            <div className="column is-8">
              <span className="subtitle is-5">
                <strong> {item.title}</strong>
              </span>
              <br />
            </div>
           
            <div className="column is-2">
              <Link to="/">
                <AiFillMessage size={30} className="has-text-link" />
              </Link>
            </div>
          </Link>
        ))}
        {/* End Contribution */}
      </div>
    </React.Fragment>
  );
};
