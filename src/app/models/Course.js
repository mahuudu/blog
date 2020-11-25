const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Course = new Schema({
  name: {type:String, maxLenght: 255 },
  des: {type:String , maxLenght: 255 },
  images: {type:String , maxLenght: 255 },
  createdAt : { type: Date, default: Date.now },
 	updatedAt : { type: Date, default: Date.now },
});


module.exports = mongoose.model('Course', Course);