const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
    fs.readFileSync('/src/files/index.html');
    res.writeHead(200, { "content-type ": "text/html" });
    res.write(data);
    res.end();
}).listen(3000);