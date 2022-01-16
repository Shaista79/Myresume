
const express=require("express");
const path=require("path");
const app=express();
const hbs=require("hbs");
const nodemailer=require("nodemailer");

const port=process.env.PORT || 5000;




app.use("/static",express.static("static"));
app.use(express.json());

app.set("view engine","hbs");
app.set("views", path.join(__dirname,"./templates/views"));
hbs.registerPartials(path.join(__dirname,"./templates/partials"))


app.get("/",(req,res)=>{
    res.status(200).render("index.hbs");
})


app.post("/form",(req,res)=>{
    console.log(req.body);
   const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"nshaista205@gmail.com",
            pass:"$#@%123$#@",
        }
    })
    const mailOptions={
        from:req.body.email,
        to:"nshaista205@gmail.com",
        subject:`Message from ${req.body.email}: ${req.body.name}`,
        html:`<div style="background-Color: #dce6ef;border-radius:10px;     text-align:center; width:500px; border:4px solid #284157; height:300px;">
        <h2 style="background-Color:#284157; color:white;text-decoration:underline;">
        Product Name: ${req.body.name}</h2>
        <h3 style="color:#284157;">Person Name :${req.body.name}</h3>
        <h3 style="color:#284157;">Message:${req.body.textArea}</h3>
        </div>`
        
    }

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            res.send("error")
        }
        else{
            console.log("Email sent : " +info.response);
            res.send("success");
        }
    })
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});