import React from "react";
import { AppRouter } from "./routers/AppRouter";
import "bulma/css/bulma.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Login } from "./components/dashboard/Login";

export const EducaliaApp = () => {
  const [user, setUser] = useLocalStorage("user", "");

  if (!user) {
    return <Login />;
  }

  return (
    <div>
      <AppRouter />
    </div>
  );
};
