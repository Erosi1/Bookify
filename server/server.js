const express=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
 

const app= express()
//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//Retrieve data from the server
app.get("/",(req,res)=>{
    res.json("Hello amazon");
});
//send data from frontend to backend
app.post("/",(req,res)=>
{
    console.log(req.body.name);
}
);

app.listen(4000,(err)=>{
    if(err){
        console.log(err);
    }
    else {
        console.log("Listening on port",4000);
    }
})
