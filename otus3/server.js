require("http").createServer((req, res) => {
    setTimeout(() => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1 style="color: red">Ave Satan</h1>');
    }, 100)
}).listen(8001)