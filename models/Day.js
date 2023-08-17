const mongoose = require('mongoose');

const DaySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  windSpeed: {
    type: String
  },
  temperature: {
    type: Number
  },
  relativeHumidity: {
    type: Number
  }
});

module.exports = Day = mongoose.model('day', DaySchema);