const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const YearSchema = new Schema({
  name: {
    type: String,
    required: true,
    enum: ['1st', '2nd', '3rd', '4th'] // Ensures only these values are allowed
  },
  branch: {
    type: Schema.Types.ObjectId,
    ref: 'Branch',
    required: true
  },
  subjects: [{
    type: Schema.Types.ObjectId,
    ref: 'Subject'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Year', YearSchema);