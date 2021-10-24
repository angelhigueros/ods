import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AgendaScreen } from "../components/agenda/AgendaScreen";
import { DashboardScreen } from "../components/dashboard/DashboardScreen";
import { Detail } from "../components/forum/Detail";
import { ForumScreen } from "../components/forum/ForumScreen";
import { New } from "../components/forum/New";
import { OpportunitiesScreen } from "../components/Opportunities/OpportunitiesScreen";
import { ProfileScreen } from "../components/profile/ProfileScreen";
import { Layout } from "../components/ui/Layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          AgendaScreen
          <Route exact path="/oportunidades/:tipo" component={OpportunitiesScreen} />
          <Route exact path="/foro/nuevo" component={New} />
          <Route exact path="/hilo/:id" component={Detail} />
          <Route exact path="/foro" component={ForumScreen} />
          <Route exact path="/agenda" component={AgendaScreen} />
          <Route exact path="/:username" component={ProfileScreen} />
          <Route exact path="/" component={DashboardScreen} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
