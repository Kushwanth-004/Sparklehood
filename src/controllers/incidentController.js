const Incident = require('../models/incidentModel');

exports.getAllIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find().sort({ reported_at: -1 });
    res.status(200).json(incidents);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createIncident = async (req, res) => {
  try {
    const { title, description, severity } = req.body;

    if (!title || !description || !severity) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newIncident = new Incident({ title, description, severity });
    const savedIncident = await newIncident.save();

    res.status(201).json(savedIncident);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getIncidentById = async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);

    if (!incident) {
      return res.status(404).json({ message: 'Incident not found' });
    }

    res.status(200).json(incident);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
exports.deleteIncident = async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);

    if (!incident) {
      return res.status(404).json({ message: 'Incident not found' });
    }

    await incident.deleteOne();
    res.status(200).json({ message: 'Incident deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
