const Resource = require('../models/Resource');

// Get all resources
const getResources = async (req, res) => {
  try {
    const resources = await Resource.find().populate('uploader', 'name email');
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new resource
const addResource = async (req, res) => {
  try {
    const resource = new Resource({
      ...req.body,
      uploader: req.user.id // From auth middleware
    });
    
    await resource.save();
    res.status(201).json(resource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Rate a resource
const rateResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    const { rating } = req.body;

    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }

    // Check if user already rated
    const existingRating = resource.ratings.find(
      r => r.user.toString() === req.user.id
    );

    if (existingRating) {
      // Update existing rating
      existingRating.rating = rating;
    } else {
      // Add new rating
      resource.ratings.push({
        user: req.user.id,
        rating: rating
      });
    }

    await resource.save();
    res.json(resource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getResources, addResource, rateResource };