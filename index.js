const express=require('express');
const cors=require('cors');
const path=require('path');
const ejs=require('ejs');


const mongoose=require('mongoose')
const admin=require('./models/admindb')
const users = require('./models/userdb');



const app=express();



app.use(express.json())
app.use(cors([""]))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}))


app.get('/',(req,res)=>{
    res.render('home',{})
})

app.get('/about',(req,res)=>{
    res.render('about',{})
})
app.get('/packages',(req,res)=>{
    res.render('packages',{})
})
app.get('/events',(req,res)=>{
    res.render('events',{})
})
app.get('/contact',(req,res)=>{
    res.render('contact',{})
})
app.get('/login',(req,res)=>{
    res.render('login',{})
})
app.get('/adminlog',(req,res)=>{
    res.render('adminlog',{})
})
app.get('/adminsign',(req,res)=>{
    res.render('adminsign',{})
})

app.get('/admin',async(req,res)=>{
    const job=await users.find({})
    res.render('admin',{job:job})
})

//create user details/////////////////////////////////


app.post('/login', async(req,res)=>{

    const {uname,fname,email,phone,date,package,price,des}=req.body;

    const user=users.create({uname,fname,email,phone,date,package,price,des});
    await user.save;

    res.render("login")
})


//create admin detail ///////////////////////////////////////////
app.post('/adminsign', async(req,res)=>{

    const {name,password,phone,address}=req.body;

    const adminid=admin.create({name,password,phone,address});
    await adminid.save;

    res.render("adminsign")
})


//find admin log verified password///////////////////////////
app.post('/admin',async(req,res)=>{

    try {
        const check=await admin.findOne({name:req.body.name});
   
        if (check.password===req.body.password) {
            res.redirect("/admin")
        }
    
    } catch (error) {
        res.render("404")
    }

})


//delete user id details///////////////////////////////
app.get('/admin/:id',async(req,res)=>{


    const {id}=req.params;
const deleteuser=await users.findByIdAndDelete({_id:id});
if(!deleteuser){
    res.status(200).json({message:"user not found"})
}else{
     
    res.redirect('/admin' )
}

res.render("success")
})


//////////find user id detail/////////////////////////////
app.get('/viewuser/:id',async(req,res)=>{
    const{id}=req.params;
            try {
                const user=await users.findById({_id:id});
                if (user==null) {
                    res.redirect('/')
                }else{
                    res.render('viewuser',{user:user});
                }
                
            } catch (error) {
           res.render("404")
            }
        })

app.listen(5001,()=>{
    console.log("server in 5001")
});
mongoose.connect("mongodb+srv://appusakeelan:8778222516@cluster0.vii0vmd.mongodb.net/SM-photos").then(()=>{
    console.log("mongo connected");
})