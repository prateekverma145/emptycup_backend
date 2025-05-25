const Designer = require('../models/Designer');

exports.getAllDesigners = async (req, res) => {
  try {
    const designers = await Designer.find();
    res.json(designers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 