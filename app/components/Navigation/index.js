"use strict";

var React = require("react");
var { Link } = require("react-router");

var Navigation = React.createClass({
  render() {
    return(
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </nav>
    );
  }
});

module.exports = Navigation;
