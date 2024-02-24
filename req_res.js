const https=require('http');
const fs=require('fs');
const server=https.createServer((req,res)=>{
    console.log('server chalu h..');
    console.log(req.url,req.method);

//to get content type
res.setHeader('Content-type','text/html');
// to return file
let path='./html_files/';
switch(req.url){
    case '/':
        path+='index.html';
        res.statusCode=200;
        break;
    case '/sam':
        path+='sam.html';
        res.statusCode=200;
        break;
    case '/samarth':
        res.statusCode=301;
        res.setHeader('Location','/sam');
        res.end();
        break;
            
    default:
        path+='kuchnhi.html';
        res.statusCode=404;
        break;
};
fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
       // res.write(data);
        res.end(data);
    }
})

});
server.listen(3000,'localhost',()=>{
    console.log("server listenng...");
})