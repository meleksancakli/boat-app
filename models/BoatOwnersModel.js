const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const boatOwnerSchema = new Schema({
    
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  surname: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
  tcno: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
  phone: {
    type: String,
    unique: true,
    required: true,
  },
  location: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
});

const BoatOwner = mongoose.model('boatowner', boatOwnerSchema);

module.exports = BoatOwner;