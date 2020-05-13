const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;



const startServer = (data) => {
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h1>${data.media}</h1>`)
        res.end()
    });

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
        //server.close();
    });
}


module.exports = {
    startServer
}