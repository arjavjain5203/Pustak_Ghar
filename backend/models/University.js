const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UniversitySchema = new Schema({
  name: String,
  courses: [{
    type: Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

module.exports = mongoose.model('University', UniversitySchema);