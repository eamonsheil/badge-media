const mongoose = require('mongoose');

try {
    mongoose.connect(process.env.DATABASE_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('connected to mongoDB');
} catch (err) {
    console.log(err)
}