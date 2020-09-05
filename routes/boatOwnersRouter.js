const router = require('express').Router();
let BoatOwner = require('../models/BoatOwnersModel');

router.route('/').get((req, res) => {
    BoatOwner.find()
    .then(boatowners => res.json(boatowners))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const email = req.body.email;
  const tcno = req.body.tcno;
  const phone = req.body.phone;
  const location = req.body.location;


  const newBoatOwner = new BoatOwner({name, surname, email, tcno, phone, location});

  newBoatOwner.save()
    .then(() => res.json('BoatOwner added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    BoatOwner.findById(req.params.id)
    .then(boatowner => res.json(boatowner))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    BoatOwner.findByIdAndDelete(req.params.id)
    .then(() => res.json('boatowner deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    BoatOwner.findById(req.params.id)
    .then(boatowner => {
        boatowner.name = req.body.name;
        boatowner.surname = req.body.surname;
        boatowner.email = req.body.email;
        boatowner.tcno = req.body.tcno;
        boatowner.phone = req.body.phone;
        boatowner.location = req.body.location;

        boatowner.save()
        .then(() => res.json('boatowner updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;