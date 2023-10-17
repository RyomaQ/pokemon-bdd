// init server express
const express = require('express');
const app = express();
const port = 3000;
const pkmRouter = require('./router/pkmRouter.js');
const userRouter = require('./router/userRouter.js');




// Connect Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rkeno:QpFhOjDUoM1y9H3k@cluster0.mcvtuvh.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...'));



const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// add router 
app.use('/pkm', pkmRouter);

app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
