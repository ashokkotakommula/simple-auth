const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./router/index');
const cors = require('cors');

require('dotenv').config()

const {PORT, mongoURI} = process.env;

app.use(express.json())
app.use(express.urlencoded(true))
app.use(cors())

app.use('/api', userRouter)

app.listen(PORT , () => {
    console.log('server running on port:', PORT);
})



if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to database')
}).catch((err) => {
    console.log(err)
})