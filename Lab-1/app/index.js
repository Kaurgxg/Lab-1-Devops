const http = require('http');

const PORT = process.env.PORT || 3000;

function add(a, b) {
  return a + b;
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Lab 1 DevOps App! Build is working.\n');
});

// Only start listening if this file is run directly (not when required by tests)
if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = { add, server };
