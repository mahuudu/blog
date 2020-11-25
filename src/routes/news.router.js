const express = require('express');

const router = express.Router();


const newControllers = require('../app/controllers/NewsController.js');

router.get('/:slug', newControllers.show);
router.get('/', newControllers.index);

module.exports = router;

