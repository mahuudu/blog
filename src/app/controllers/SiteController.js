const Course = require('../models/Course');
const {mutilValueToObject} = require('../../util/mongooes.js');

class SiteController{

	index(req,res, next){
		Course.find({})
				.then(Course => {
					
					res.render('home', {
						Course : mutilValueToObject(Course)
					})
				}) 
				.catch(next);
	}

	search(req,res){
		res.send("search");
	}


} 


module.exports = new SiteController;