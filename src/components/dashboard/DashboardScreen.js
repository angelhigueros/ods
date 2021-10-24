import React from "react";
import { Navbar } from "../ui/Navbar";
import { AppsList } from "./AppsList";

import "./dashboard.css";
import { ForumCardList } from "./ForumCardList";
import { UserCard } from "./UserCard";

export const DashboardScreen = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-3">
          <UserCard />
          <AppsList />
          {/* <Goals /> */}
        </div>
        <div className="column is-9">
          {/* <Watching /> */}
          <br />
          <ForumCardList />
          {/* <Tools /> */}
        </div>
      </div>
    </div>
  );
};
