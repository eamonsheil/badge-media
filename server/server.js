const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const http = require('http').Server(app);
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', require('./routes/user'));


try {
    mongoose.connect(process.env.DATABASE_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('connected to mongoDB');
} catch (err) {
    console.log(err)
}

process.on('unhandledRejection', err => {
    console.log('Unhandled Rejection:', err)
});



// io.on('connection', socket => {
    
// })


http.listen(port, () => {
    console.log(`listening on *: ${port}`)
})
