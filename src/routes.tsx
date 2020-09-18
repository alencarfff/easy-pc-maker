import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path={"/sobre"} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
