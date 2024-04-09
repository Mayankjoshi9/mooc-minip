const employee=require("../models/Employee");

exports.getEmployee=async(req,res)=>{
    try {
        const response=await employee.find({});
        res.status(200).json({
            success:true,
            data:response,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        })
    }
}