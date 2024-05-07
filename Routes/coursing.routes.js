const { getAllCourses , createCourse , editCourse , deleteCourse} = require('../ControllerFile/coursing.controller')

const express = require("express")


const router = express.Router()

// get the All Courses 
router.get('/', getAllCourses)

// Create the Courses 
router.post('/' , createCourse)

// Update the Courses 
router.put('/:courseID' , editCourse)

// Delete the Courses 
router.delete('/:courseID' , deleteCourse)


module.exports = router 
