const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
  Role1: {
    type: String,
    enum: ['Admin']
  },
  Role2: {
    type: String,
    enum: ['Client']
  }
});

module.exports = mongoose.model('Roles', rolesSchema);