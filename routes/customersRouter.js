const router = require('express').Router();
let Customer = require('../models/CustomerModel');

router.route('/').get((req, res) => {
    Customer.find()
    .then(customers => res.json(customers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const email = req.body.email;
  const phone = req.body.phone;

  const newCustomer = new Customer({
    name,
    surname,
    email,
    phone
  });

  newCustomer.save()
  .then(() => res.json('customer added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Customer.findById(req.params.id)
    .then(customer => res.json(customer))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Customer.findByIdAndDelete(req.params.id)
    .then(() => res.json('customer deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Customer.findById(req.params.id)
    .then(customer => {
      customer.name = req.body.name;
      customer.surname = req.body.surname;
      customer.email = req.body.email;
      customer.phone = req.body.phone;

      customer.save()
        .then(() => res.json('customer updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;