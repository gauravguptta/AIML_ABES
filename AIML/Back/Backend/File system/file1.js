const fs = require('fs');
// const data = fs.readFileSync("./data.txt");
// console.log(data.toString()); // converting in string 
const data = fs.readFileSync("./data.txt","utf-8");
console.log(data);

fs.writeFileSync("./data1.txt","hey this is my new work","utf-8");

// fs.appendFileSync("./data1.txt","work from another file","utf-8");
// fs.renameSync("./data3.txt","./data5.txt");
// fs.unlinkSync("./data5.txt");
console.log(data);
if(data.match("H")){
    const newdata = data.replace("H","ABES");
    fs.writeFileSync("./data.txt",newdata,"utf-8");
}





