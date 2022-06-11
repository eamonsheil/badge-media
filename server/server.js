const express = require('express');
const app = express();
require('dotenv').config();


const http = require('http').Server(app);
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (rq, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

http.listen(port, () => {
    console.log(`listening on *: ${port}`)
})


// io.on('connection', socket => {
    
// })