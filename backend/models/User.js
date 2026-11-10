const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator'); // Add this if you want email validation

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true, 
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Invalid email'] 
  },
  password: {
    type: String,
    required: true
  },
  ratedResources: [{
    resource: {
      type: Schema.Types.ObjectId,
      ref: 'Resource',
      required: true
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    }
  }],
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, {
  timestamps: true
});

UserSchema.index({ 'ratedResources.resource': 1, _id: 1 }, { unique: true });

module.exports = mongoose.model('User', UserSchema);