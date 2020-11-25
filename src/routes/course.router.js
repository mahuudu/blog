const express = require('express');

const router = express.Router();


const CourseController = require('../app/controllers/CourseController.js');

router.get('/:slug', CourseController.show);


module.exports = router;

