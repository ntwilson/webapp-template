import * as url from 'url'
import { createServer, IncomingMessage, ServerResponse } from 'http'
import { Router } from './router'

export type ServerMessage = IncomingMessage & { url:string }

export function start(route:Router) {
  function onRequest(request:ServerMessage, response:ServerResponse) {
    const pathname = url.parse(request.url).pathname
    console.log(`Request for ${pathname} received.`)

    if (pathname === undefined) 
      console.log('request undefined: terminating...')
    else
      route(pathname, response, request)
  }
  
  let port = 8888;
  createServer(onRequest).listen(port);
  console.log(`Server has started on port ${port}.`);
}
