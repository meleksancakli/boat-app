const express = require('express');
const mongoose = require('mongoose');
const config = require('config')
var cors = require('cors')
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');
const boatsRouter = require('./routes/boatsRouter');
const usersRouter = require('./routes/usersRouter');
const customersRouter = require('./routes/customersRouter');
const boatOwnersRouter = require('./routes/boatOwnersRouter');

const app = express();
app.use(cors())

//bodyparser middleware
app.use(express.json());

const db = config.get('mongoURI');

//connect mongodb
mongoose.connect(db,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log('MongoDB bağlandı'))
    .catch(err => console.log(err));

//routes
app.use('/api/users', users)
app.use('/api/auth', auth)
app.use('/users', usersRouter);
app.use('/boats', boatsRouter);
app.use('/customers', customersRouter);
app.use('/boatowners', boatOwnersRouter);

const port = process.env.port || 5000
app.listen(port, () => console.log(`Sunucu ayakta`))