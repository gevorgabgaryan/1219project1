const express=require("express");
const random=require("random");

const app=express();

app.use(express.static(`public`))

app.set(`view engine`,`ejs`);

app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
    res.render(`index`)
})

app.get("/info",(req,res)=>{
    data={
        name:'Gevorg', 
        email:'gevorgabgaryan001@gmail.com',
        languages:['c++','javascript', 'php']
    }
    res.render(`info`,{data:data})
}) 


app.get("/random",(req,res)=>{
   let rand="";
   if(req.query.max && req.query.min){
      rand=random.int(+req.query.min,+req.query.max)
   }
    res.render(`random`,{rand:rand})
}) 


app.get("/contact",(req,res)=>{
    res.render(`contact`)
}) 

app.post("/contact",(req,res)=>{
   let info=req.body;
   console.log(info)
    res.render(`contact-success`,{info})
}) 


app.listen(3000)