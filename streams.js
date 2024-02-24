const fs=require('fs');
const reads=fs.createReadStream('./2.txt');
reads.on('./2.txt',(chunk)=>{
    console.log("new data");
    console.log(chunk.toString());
});