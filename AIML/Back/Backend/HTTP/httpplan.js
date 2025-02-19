const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-type','text/plan');
    res.write("<h1>Hello,world</h1>");
    const data = await fs.readFile("./home,html",utf8);
    res.end(data);

});
port = 3000;
server.listen(port,() =>{
    const a = server.address();
    console.log('Server is running on the port ${port}')
});
    

   