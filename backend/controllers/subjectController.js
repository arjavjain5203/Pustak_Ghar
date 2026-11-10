const Subject = require('../models/Subject');
const Resource = require('../models/Resource');

// Get subject details with resources
const getSubjectDetails = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id)
      .populate({
        path: 'resources.notes resources.videos resources.pyqs resources.syllabus',
        select: 'title url averageRating ratingCount'
      });

    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }

    res.json(subject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Rate a subject (overall rating)
const rateSubject = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    const { rating } = req.body;

    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }

    // Update rating
    subject.overallRating = (
      (subject.overallRating * subject.ratingCount + rating) / 
      (subject.ratingCount + 1)
    ).toFixed(1);
    subject.ratingCount += 1;

    await subject.save();
    res.json(subject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getSubjectDetails,
  rateSubject
};