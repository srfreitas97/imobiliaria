const app = require('./middlewares');

const http = require('http');

const server = http.createServer(app);

server.listen(3000, () => {
    console.log(`API rodando na porta 3000`);
});