const read = ()=>{
    const fs = require("fs");
    fs.readFile("./data.txt","utf-8",(error,data)=>{
        if(error){
            console.error("Error reading file:",error);
        }
        else{
            console.log("data form file:",data);
        }
    });
}
module.exports = read;
// read();
// console.log("complete me first")