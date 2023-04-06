const express = require('express')
const app = express()
const posts = require('./posts')

app.get('/posts', (req,res) => {
    res.status(200)
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
    res.json(posts)
})

app.use((req, res, next) => {
    res.status(200)
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
    next();
  });

app.get('/',(req,res) => {
    res.send('Api is running.')
})

app.listen(process.env.PORT || 3000, ()=>console.log("server is running"))