const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Schema.Types.ObjectId,
    ref: 'Year',
    required: true
  },
  resources: {
    notes: [{
      type: Schema.Types.ObjectId,
      ref: 'Resource'
    }],
    videos: [{
      type: Schema.Types.ObjectId,
      ref: 'Resource'
    }],
    pyqs: [{
      type: Schema.Types.ObjectId,
      ref: 'Resource'
    }],
    syllabus: [{
      type: Schema.Types.ObjectId,
      ref: 'Resource'
    }]
  },
  overallRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  ratingCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Subject', SubjectSchema);