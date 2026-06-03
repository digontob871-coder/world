const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
  year: { type: Number, unique: true, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  country: { type: String, required: true },
  logo: { type: String },
  groups: [{
    groupName: String,
    teams: [String]
  }],
  stadiums: [{
    stadiumName: String,
    city: String,
    country: String,
    capacity: Number,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  }],
  winner: { type: String },
  runnerUp: { type: String },
  thirdPlace: { type: String },
  fourthPlace: { type: String },
  topScorer: {
    playerName: String,
    goals: Number,
    teamName: String
  },
  bestPlayer: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tournament', tournamentSchema);
