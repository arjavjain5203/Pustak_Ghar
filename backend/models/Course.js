const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: String,
  university: {
    type: Schema.Types.ObjectId,
    ref: 'University'
  },
  branches: [{
    type: Schema.Types.ObjectId,
    ref: 'Branch'
  }]
});

module.exports = mongoose.model('Course', CourseSchema);