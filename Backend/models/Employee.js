const mongoose=require("mongoose");

const employeeSchema=new mongoose.Schema({
    Name:{
      type:String,
      require:true,
      maxLength:50
    },
    Email:{
        type:String,
        require:true,
		unique: true,

    },
    Title:{
        type:String,
        require:true,
        maxLength:50

    },
    department:{
        type:String,
        require:true,
        maxLength:50

    },
    role:{
        type:String,
        require:true,
        maxLength:50

    },
    image:{
        type:String,
        require:true,

    }

})

module.exports=mongoose.model("Employee",employeeSchema);