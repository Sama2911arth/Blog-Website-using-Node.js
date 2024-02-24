const express=require('express');
const app=express();
app.listen(3000);

app.use((req,res,next)=>{
    console.log('hostname:',req.hostname);
    console.log('method:',req.method);
    console.log('url:',req.path);
    console.log('host details captured...');
    next();
})
app.get('/',(req,res)=>{
    res.sendFile('./html_files/index.html',{root:__dirname});
});

app.get('/sam',(req,res)=>{
    res.sendFile('./html_files/sam.html',{root:__dirname});
});
//redirect
app.get('/samarth',(req,res)=>{
    res.redirect('/sam');
});

//404
app.use((req,res)=>{
    res.status(404).sendFile('./html_files/kuchnhi.html',{root:__dirname});
})
