import * as requestHandlers from "./requestHandlers"
import { ServerResponse, IncomingMessage } from 'http'

export interface Router {
  (pathname:string, response:ServerResponse, request:IncomingMessage) : void
}

interface Dictionary<T> {
  [index:string] : T
}

const handle : Dictionary<(response:ServerResponse, request:IncomingMessage) => void> = {}
handle['/'] = requestHandlers.index
handle['/bundle.js'] = requestHandlers.js
handle['/stylesheet.css'] = requestHandlers.css
handle['/bootstrap.min.css'] = requestHandlers.bootstrap
handle['/favicon.ico'] = () => ''

export function route(pathname:string, response:ServerResponse, request:IncomingMessage) {
  console.log("About to route a request for " + pathname);
  if (pathname in handle) {
    handle[pathname](response, request);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 Not found");
    response.end();
  }
}
