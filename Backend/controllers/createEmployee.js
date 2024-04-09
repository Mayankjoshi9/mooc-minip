const Employee = require("../models/Employee");

exports.createEmployee = async (req, res) => {
    try {
        const { Name, Email, Title, department, role } = req.body;
        console.log(req.body);
        if (Name && Email && Title && department && role) {
            const response = await Employee.create({
                 Name,
                 Email, 
                 Title, 
                 department,
                  role,
                  image: `https://api.dicebear.com/5.x/initials/svg?seed=${Name}`,
                 });
            res.status(200).json({
                success: true,
                data: response
            })
        }
        else {
            res.status().json({
                success: false,
                message: "please enter all the details"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        })
    }
}