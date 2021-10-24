import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DashboardScreen } from "../components/dashboard/DashboardScreen";
import { ProfileScreen } from "../components/profile/ProfileScreen";
import { Layout } from "../components/ui/Layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/:username" component={ProfileScreen} />
          <Route exact path="/" component={DashboardScreen} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
