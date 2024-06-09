const http = require('http');
const url = require('url');
const fs = require('fs');
const calculator = require('./modules.js');

const server = http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;

    if (path === '/') {
        fs.readFile(__dirname + '/index.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end('404 Not Found');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } 
    
    else if (path === '/add') {
        const query = url.parse(req.url, true).query;
        const result = calculator.add(parseInt(query.num1), parseInt(query.num2));
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Addition result: ${result}`);
    } 
    
    else if (path === '/sub') {
        const query = url.parse(req.url, true).query;
        const result = calculator.subtract(parseFloat(query.num1), parseFloat(query.num2));
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Subtraction result: ${result}`);
    } 
    
    else if (path === '/mul') {
        const query = url.parse(req.url, true).query;
        const result = calculator.multiply(parseFloat(query.num1), parseFloat(query.num2));
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Multiplication result: ${result}`);
    } 
    
    else if (path === '/div') {
        const query = url.parse(req.url, true).query;
        const result = calculator.divide(parseFloat(query.num1), parseFloat(query.num2));
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Division result: ${result}`);
    } 
    
    else if(path =='/power'){
        const query = url.parse(req.url, true).query;
        const result = calculator.power(parseFloat(query.num1), parseFloat(query.num2));
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Power result: ${result}`);
    }
    else if(path =='/modulo'){
        const query = url.parse(req.url, true).query;
        const result = calculator.modulo(parseFloat(query.num1), parseFloat(query.num2));
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Modulo result: ${result}`);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 Not Found');
    }
});

const PORT = 9000;
server.listen(PORT, () => {
    console.log('Server is running...');
});
