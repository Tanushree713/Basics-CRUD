const Courses = require('../Model/coursing.model')

// For Fetching Courses 
const getAllCourses = async (req , res) => {
   try {
     const courses = await Courses.find()
     res.json(courses)
     console.log("SuccessFully Fetched All Courses")
     
   } catch (error) {
     res.json(error)
   }

}

// For Course Creation 
const createCourse = async (req, res) => {
    try {
       const course = await Courses.create(req.body);
       res.status(201).json(course); 
       console.log("Created Course Successfully")
    } catch (err) {
      res.json(err)
 } 
}


// For Course Updation
const editCourse = async (req ,res) => {
  try{
   const courseID = req.params.courseID
   const course = await Courses.findById(courseID)

   if (req.body.title){
      course.title = req.body.title 
   }
   if (req.body.description){
      course.description = req.body.description
   }
   if (req.body.lectures){
      course.lectures = req.body.lectures
   }
   
   const updatedCourse = await course.save()
   res.json(updatedCourse)
   console.log("SuccessFully get Updated ")

  }

  catch(err){
    res.json(err)
  }
}


// For course Deletion
const deleteCourse = async (req , res) => {
   try {
      const courseID = req.params.courseID
      const course = await Courses.findByIdAndDelete(courseID)
      res.json({ message: 'Course deleted successfully' })
      console.log("SuccessFully Deleted ")
   }
   catch(err){
      res.json(err)
   }
}



module.exports = {
    getAllCourses ,
    createCourse ,
    editCourse,
    deleteCourse
}