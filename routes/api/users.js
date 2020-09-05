const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

//User model
const User = require('../../models/User')

router.post('/', (req, res) => {
    const { name, surname, email, password } = req.body;

    if (!name || !surname || !email || !password) {
        return res.status(400).json({ msg: 'Ooops, gözden kaçırdığın bi şeyler var!' });
    }
    //kullanıcı kontrol
    User.findOne({ email })
        .then(user => {
            if(user) return res.status(400).json({ msg: 'Bu email ile üye olunmuş' });

            const newUser = new User({
                name,
                surname,
                email,
                password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                { id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 36000 },
                                (err, token) => {
                                    if(err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            name: user.name,
                                            surname: user.surname,
                                            email: user.email
                                        }
                                    });
                                }
                            )
                        });
                })
            })
        })
});

module.exports = router;