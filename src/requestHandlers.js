import * as fs from 'fs';

export function index(response, request) {
    response.writeHead(200, {"Content-Type": "text/html"});
    const filename = __dirname + '\\index.html';
    console.log('serving ' + filename);

    const fileStream = fs.createReadStream(filename);
    fileStream.pipe(response);
}

export function js(response, request) {
    response.writeHead(200, {"Content-Type": "text/html"});
    const filename = __dirname + '\\Bundle.js';
    console.log('serving ' + filename);

    const fileStream = fs.createReadStream(filename);
    fileStream.pipe(response);
}