import * as fs from 'fs';

import staticIndex from '../static/index.html';
import staticStyles from '../static/stylesheet.css';
import staticBootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export function index(response, request) {
    serveFile(response, staticIndex, 'text/html');
}

export function js(response, request) {
    serveFile(response, 'bundle.js', 'text/js');
}

export function css(response, request) {
    serveFile(response, staticStyles, 'text/css');
}

export function bootstrap(response, request) { 
    serveFile(response, staticBootstrap, "text/css");
}

function serveFile(response, filename, contentType) {
    response.writeHead(200, {"Content-Type": contentType});
    const filePathName = filename;
    console.log('serving ' + filePathName);

    const fileStream = fs.createReadStream(filePathName);
    fileStream.pipe(response);
}
