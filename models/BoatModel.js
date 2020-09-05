const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const boatSchema = new Schema({
    
  boatno: {
    type: Number,
    required: true,
    unique: true,
    minlength: 3
  },
  boatname: {
    type: String,
    required: true,
    minlength: 3
  },
  owner: {
    type: String,
    required: true,
    minlength: 3
  },
  location: {
    type: String,
    required: true,
    minlength: 3
  },
  boattype: {
    type: String,
    required: true,
    minlength: 3
  },
  boatbrand: {
    type: String,
    required: true,
    minlength: 3
  },
  boatmodal: {
    type: String,
    required: true,
    minlength: 3
  }
});

const Boat = mongoose.model('boat', boatSchema);

module.exports = Boat;