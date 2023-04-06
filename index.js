const express = require('express')
const app = express()
const posts = require('./posts')
const cors = require('cors')

app.use(cors())
app.get('/posts', function (req, res, next) {
    res.json(posts)
})

app.get('/',(req,res) => {
    res.send('Api is running.')
})

app.listen(process.env.PORT || 3000, ()=>console.log("server is running"))