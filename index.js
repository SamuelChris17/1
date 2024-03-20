const http = require('http');

const hostname = 'localhost';
const port = 8900;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  
  if (req.url === '/' && req.method === 'GET') {
    res.end('Samuel Chris Osahon'); 
  } else {
    res.end('404 Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
