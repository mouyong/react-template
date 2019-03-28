import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import StarMother from './containers/StarMother';

const routes = [
  {
    path: "/",
    component: StarMother
  },
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function RouteConfig() {
  return (
    <Router>
      <div>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    </Router>
  );
}

export default RouteConfig;
