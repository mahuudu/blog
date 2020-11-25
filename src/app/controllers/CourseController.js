const Course = require('../models/Course');
const {mongooesToObject} = require('../../util/mongooes.js');

class CourseController{

	show(req,res, next){
		Course.findOne({ slug: req.params.slug})
				.then(Course =>{
					res.render('course/show', {
						Course : mongooesToObject(Course)
					})
				})
				.catch(next);
	}


} 


module.exports = new CourseController;