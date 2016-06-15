import * as http from "http";
import * as url from "url";

export function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(pathname, response, request);
  }
  
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}
