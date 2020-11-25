const newRouter = require('./news.router');
const homeRouter = require('./site.router');
const course = require('./course.router');

function route(app){

	app.use('/news', newRouter);

	app.use('/', homeRouter);

	app.use('/course', course);

}

module.exports = route;