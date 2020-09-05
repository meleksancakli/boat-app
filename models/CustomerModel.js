const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    
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
  phone: {
    type: String,
    unique: true,
    required: true,
  }
});

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;