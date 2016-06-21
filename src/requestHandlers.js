import * as fs from 'fs';

export function index(response, request) {
    serveFile(response, 'index.html', 'text/html');
}

export function js(response, request) {
    serveFile(response, 'bundle.js', 'text/js');
}

export function css(response, request) {
    serveFile(response, 'stylesheet.css', 'text/css');
}

export function bootstrap(response, request) { 
    serveFile(response, "..\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css", "text/css");
}

function serveFile(response, filename, contentType) {
    response.writeHead(200, {"Content-Type": contentType});
    const filePathName = __dirname + '\\' + filename;
    console.log('serving ' + filePathName);

    const fileStream = fs.createReadStream(filePathName);
    fileStream.pipe(response);
}