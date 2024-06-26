const mongoose=require('mongoose');
require("dotenv").config();

const dbConnect=()=>{mongoose.connect(
    process.env.DATABASE_URL
)
.then(()=>{
    console.log("DB connected successfully. ");
})
.catch(()=>{
    console.log("Error in DB connection. ");
    process.exit(1);
})
}


module.exports=dbConnect;