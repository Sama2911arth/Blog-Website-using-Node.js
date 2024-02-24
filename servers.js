const http=require('http');
const server=http.createServer((req,res)=>{
    console.log("requests coming...");
});
server.listen('3000','localhost',()=>{
    console.log("servers active....");
});
