const http = require('http')


const server = http.createServer((req, res) => {
    if(req.url === '/about'){
        res.end(`this is about page`);
    } else if(req.url === '/contact'){
        res.end(`this is contact page`);
    } else if(req.url === '/'){
        res.end(`this is home page`);
    }else{
        res.writeHead(404);
        res.end('page not found')
    }
})

server.listen(3000);
