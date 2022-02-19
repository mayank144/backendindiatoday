const express = require('express');
const app = express();
const port = 5000
const connectToMongo = require('./db')
connectToMongo();
app.use(express.json());

const cors = require('cors');
app.use(cors({ origin: true }));
app.use('/profile', require('./routes/profile'))
app.use('/news', require('./routes/news'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})