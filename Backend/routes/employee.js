const express=require("express");
const router=express.Router();

// fetching controllers
const {createEmployee}=require("../controllers/createEmployee");
const {getEmployee}=require("../controllers/getEmployee");

// defining route
router.post("/createEmployee",createEmployee);
router.get("/getEmployee",getEmployee);

module.exports=router;