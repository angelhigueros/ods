import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { AppsList } from "./AppsList";


import "./dashboard.css";
import { ForumCardList } from "./ForumCardList";
import { Login } from "./Login";
import { Opportunities } from "./Opportunities";
import { UserCard } from "./UserCard";

export const DashboardScreen = () => {
  const [user, setUser] = useLocalStorage("user",);

  if (!user) {
    return <Login />;
  } else {
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-3">
            <UserCard />
            <AppsList />
            {/* <Goals /> */}
          </div>
          <div className="column is-9">
            <Opportunities />
            <br />
            <ForumCardList />
            {/* <Tools /> */}
          </div>
        </div>
      </div>
    );
  }
};
