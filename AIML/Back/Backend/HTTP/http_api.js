const http = require('http');
const axios = require('axios');
const port = 3000;

const server = http.createServer(async(req, res) => {
    console.log('Hello from the server');
    res.writeHead(200, { "Content-Type": "text/html" });

    // const response =  await fetch("https://dummyjson.com/products");
    // const data = await response.json();

    const response = await axios.get("https://dummyjson.com/products");
    const productsdata = response.data.products;
    let frontdata = '<html><head></head><body>'
    productsdata.forEach(product => {
        frontdata  += '<div> <img src ="${product.thumbnail}"> </div>'
    });
    frontdata += '</body></html>'
    res.end(frontdata);
    // res.end(JSON.stringify(productsdata));
});

server.listen(port, () => {
    console.log('Server is running on port ${port}');
});