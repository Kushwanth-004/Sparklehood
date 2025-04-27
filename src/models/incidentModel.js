const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
  },
  severity: {
    type: String,
    required: true,
    enum: ['Low', 'Medium', 'High'],
  },
  reported_at: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true,
});

const Incident = mongoose.model('Incident', incidentSchema);

module.exports = Incident;
