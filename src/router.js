import * as requestHandlers from "./requestHandlers";

var handle = {};
handle["/"] = requestHandlers.index;
handle["/bundle.js"] = requestHandlers.js;
handle["/stylesheet.css"] = requestHandlers.css;
handle["/bootstrap.min.css"] = requestHandlers.bootstrap;
handle["/favicon.ico"] = () => '';

export function route(pathname, response, request) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 Not found");
    response.end();
  }
}
