"use strict";

var App = require("./components/App");
var IndexRoute = require("./components/IndexRoute");
var AboutRoute = require("./components/AboutRoute");
var React = require("react");
var { DefaultRoute, Route } = require("react-router");

var routes = (
  <Route handler={ App }>
    <DefaultRoute handler={ IndexRoute } />
    <Route name="about" handler={ AboutRoute } />
  </Route>
);

module.exports = routes;
