const express=require('express');
const app=express();
const morgan=require('morgan')
const mongoose=require('mongoose');
const punycode = require('punycode');
const routes=require('./blog_router/routes');

//connect to mongodb
const dbURI='mongodb+srv://Sam:Samarth@cluster0.oduxduy.mongodb.net/oduxduy?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then((result)=>{
    //server listening to port no. 3000
    app.listen(3000);
}).catch((err)=>{
    console.log(err);
});
//registering view  engine ejs
app.set('view engine','ejs');

//static middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
//middleware
app.use(morgan('dev'));

//index page
app.use(routes);


app.get('/about',(req,res)=>{
   res.render('about',{title:'About'});
});
app.get('/create',(req,res)=>{
    res.render('create',{title:'Create New Blog'});
})



app.get('/details:id',(req,res)=>{
  let id=req.params.id;
  Blogs.findById(id)
  .then((result)=>{
    res.render('/details',{Blog:result,title:'Blog Details'});
  })
  .catch((err)=>{
    conosle.log(err);
  })
})

//404 page
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});

