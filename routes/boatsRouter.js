const router = require('express').Router();
let Boat = require('../models/BoatModel');

router.route('/').get((req, res) => {
    Boat.find()
    .then(boats => res.json(boats))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const boatno = Number(req.body.boatno);
  const owner = req.body.owner;
  const boatname = req.body.boatname;
  const location = req.body.location;
  const boattype = req.body.boattype;
  const boatbrand = req.body.boatbrand;
  const boatmodal = req.body.boatmodal;

  if(!boatname || !location) {
    return res.status(400).json({ msg: 'Ooops, gözden kaçırdığın bi şeyler var!' });
  }

  const newBoat = new Boat({
    boatno,
    boatname,
    owner,
    location,
    boattype,
    boatbrand,
    boatmodal
  });

  newBoat.save()
  .then(() => res.json('boat added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Boat.findById(req.params.id)
    .then(boat => res.json(boat))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Boat.findByIdAndDelete(req.params.id)
    .then(() => res.json('boat deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Boat.findById(req.params.id)
    .then(boat => {
      boat.boatno = Number(req.body.boatno);
      boat.boatname = req.body.boatname;
      boat.owner = req.body.owner;
      boat.boattype = req.body.boattype;
      boat.location = req.body.location;
      boat.boattype = req.body.boattype;
      boat.boatbrand = req.body.boatbrand;
      boat.boatmodal = req.body.boatmodal;

      boat.save()
        .then(() => res.json('boat updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;