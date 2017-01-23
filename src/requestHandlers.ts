import * as fs from 'fs';
import { ServerResponse, IncomingMessage } from 'http'

const staticIndex = require('../static/index.html')
const staticStyles = require('../static/stylesheet.css')
const staticBootstrap = require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

export function index(response:ServerResponse, request:IncomingMessage) {
    serveFile(response, staticIndex, 'text/html');
}

export function js(response:ServerResponse, request:IncomingMessage) {
    serveFile(response, 'bundle.js', 'text/js');
}

export function css(response:ServerResponse, request:IncomingMessage) {
    serveFile(response, staticStyles, 'text/css');
}

export function bootstrap(response:ServerResponse, request:IncomingMessage) { 
    serveFile(response, staticBootstrap, "text/css");
}

function serveFile(response:ServerResponse, filename:string, contentType:string) {
    response.writeHead(200, {"Content-Type": contentType});
    const filePathName = filename;
    console.log('serving ' + filePathName);

    const fileStream = fs.createReadStream(filePathName);
    fileStream.pipe(response);
}
