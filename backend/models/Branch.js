const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BranchSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  years: [{
    type: Schema.Types.ObjectId,
    ref: 'Year'
  }]
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Branch', BranchSchema);