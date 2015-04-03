"use strict";

var koa = require("koa");
var path = require("path");
var jade = require("koa-jade");
var compress = require("koa-compress");
var React = require("react");
var Router = require("react-router");
var serveStatic = require("koa-static");
var app = koa();

function getHandler(router) {
  return new Promise(function(resolve, reject) {
    router.run(function(Handler, state) {
      var markup = React.renderToString(<Handler {...state} />);

      resolve(markup);
    });
  });
};

app.use(compress());
app.use(serveStatic(path.join(__dirname, "../../public")));
app.use(function *() {
  var router = Router.create({
    routes: require("../routes"),
    location: this.request.url,
    onAbort: function() {}
  });

  var markup = yield getHandler(router);
  this.body = `<!doctype html>${markup}`;
});

app.listen(3000, function() {
  console.log("Server is listening on port 3000");
});
