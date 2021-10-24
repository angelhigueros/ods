import React, { useState } from "react";

import { Info } from "./Info";
import { Loader } from "../ui/Loader";
import { Posts } from "./Posts";
import { CoursesLists } from "./CoursesList";
import { Hero } from "./Hero";

export const ProfileScreen = ({ match: { params } }) => {
  // Set loader
  const [loader, setLoader] = useState(true);

  // Give time to load the data
  setTimeout(() => {
    setLoader(false);
  }, 900);

  if (loader) {
    return <Loader />;
  }

  return (
    <React.Fragment>
        <Hero />
        <div className="columns is-multiline HeroUser-container">
          <div className="column is-6">
            <Info />
            <Posts />
          </div>
          <div className="column is-6">
            <CoursesLists />
          </div>
        </div>
    </React.Fragment>
  );
};
