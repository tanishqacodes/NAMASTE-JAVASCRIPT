import express from 'express'
const app=express();
const port = process.env.PORT || 3000;
import web from './routes/web.js'

// set template engine
app.set('view engine','ejs');

// load routes
app.use('/',web);

app.listen(port,()=>{
    console.log(`Server listening at port : ${port}`);
});

