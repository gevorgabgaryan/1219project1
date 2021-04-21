const express=require("express");

const app=express();

app.use(express.static(`public`))

app.set(`view engine`,`ejs`)

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


app.listen(3000)