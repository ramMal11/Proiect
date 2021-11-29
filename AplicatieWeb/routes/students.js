const Student = require("../models/student");

const router = require("express").Router();

router
.route("/students")
.get(async (req, res)=>{
    try{
        const students = await Student.findAll();
        return res.status(200).json(students);
    }catch (err){
        return res.status(500).json(err)
    }
})
.post(async (req,res)=>{
    try{
        const newStudent = await Student.create(req.body);
        return res.status(200).json(newStudent);
    }catch (err){
        return res.status(500).json(err)
    }
})

module.exports = router;