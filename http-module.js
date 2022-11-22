const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to Home Page')
    }
    if(req.url === '/about'){
        res.end('This page is about the website')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>Error Page, Go back to home page</p>
        <a href = "/"> Home </a>
    `)
}).listen(5000);