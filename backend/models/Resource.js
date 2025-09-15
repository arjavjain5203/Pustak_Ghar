const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  type: { type: String, required: true, enum: ['note', 'video', 'pyq', 'syllabus'] },
  title: { type: String, required: true, trim: true },
  url: { type: String, required: true, trim: true },
  uploadDate: { type: Date, default: Date.now },
  uploader: { type: Schema.Types.ObjectId, ref: 'User' },
  ratings: [{
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 }
  }],
  averageRating: { type: Number, default: 0, min: 0, max: 5 },
  ratingCount: { type: Number, default: 0 }
}, { timestamps: true });


// Middleware to calculate average rating before saving
ResourceSchema.pre('save', function(next) {
  if (this.ratings.length > 0) {
    const sum = this.ratings.reduce((acc, curr) => acc + curr.rating, 0);
    this.averageRating = sum / this.ratings.length;
    this.ratingCount = this.ratings.length;
  }
  next();
});

module.exports = mongoose.model('Resource', ResourceSchema);