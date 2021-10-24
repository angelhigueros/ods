import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AgendaScreen } from "../components/dashboard/AgendaScreen";
import { DashboardScreen } from "../components/dashboard/DashboardScreen";
import { ProfileScreen } from "../components/profile/ProfileScreen";
import { Layout } from "../components/ui/Layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>AgendaScreen
          <Route exact path="/agenda" component={AgendaScreen} />
          <Route exact path="/:username" component={ProfileScreen} />
          <Route exact path="/" component={DashboardScreen} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
