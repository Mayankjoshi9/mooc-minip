const express=require('express');
const app=express();
require("dotenv").config();
const dbConnect=require("./config/Database");
var cors = require("cors");
const routes=require("./routes/employee");


const Port=process.env.PORT||3000;


app.use(
    cors({
      origin: "*",
    })
  );
// middleware
app.use(express.json());

// mounting
app.use("/api/v1",routes);

// db connect
dbConnect();

// app run 
app.listen(Port,()=>{
    console.log(`App Succesfully run at Port ${Port}`);
})

app.get("/", (req, res) => {
    res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
  });