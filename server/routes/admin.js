const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const User = require('../models/User')

router.post('/add-project', async function(req, res) {
  try {
   const body =req.body
   const user = await User.findOne({ _id: body.id })
   const technology =await User.find({technology: {$regex:body.technology}})

   if(user){
    let project = await Project.findOne({ title: body.title })
    let newProject = new Project({
     title: body.title,
     discription:body.discription,
     technology:body.technology,
     date:body.date,
     user:user
 })
 let project_data = await newProject.save();
 if (project_data) {
   res.json(project_data)
   
   }
    
  }
} catch (error) {
    console.log(error);
    throw error;
}
})

router.get('/get-developer', async function(req, res) {
  try {
    var technology = req.query.technology;
   const developer =await User.find({technology: {$regex:technology}})
  console.log("technology"+developer)
   if(developer){
   res.json(developer) 
  }
} catch (error) {
    console.log(error);
    throw error;
}
})
module.exports = router;