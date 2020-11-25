const mongoose = require('mongoose');

async function connect(){
	try{
		await mongoose.connect('mongodb://localhost:27017/education_dev', {
		  useNewUrlParser: true,
		  useUnifiedTopology: true,
		  useFindAndModify: false,
		  useCreateIndex: true
		});
		console.log('sucess');
	}catch(error){
		console.log('Fail');
	}
}

module.exports = {connect};