import * as http from "http";
import * as url from "url";

export function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(pathname, response, request);
  }
  
  let port = 8888;
  http.createServer(onRequest).listen(port);
  console.log(`Server has started on port ${port}.`);
}
