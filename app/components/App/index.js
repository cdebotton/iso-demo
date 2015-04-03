"use strict";

var React = require("react");
var { RouteHandler } = require("react-router");
var Navigation = require("../Navigation");

var App = React.createClass({
  render() {
    return (
      <html lang="en">
      <head>
        <title>Isomorphic</title>
      </head>
      <body>
        <h1>Isomorphic</h1>
        <Navigation />
        <RouteHandler />
        <script src="/bundle.min.js" />
      </body>
      </html>
    );
  }
});

module.exports = App;
