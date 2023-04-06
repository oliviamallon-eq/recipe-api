const express = require('express')
const app = express()
const posts = require('./posts')

app.get('/posts', (req,res) => {
    res.status(200)
    res.header('Access-Control-Allow-Origin', '*');
    res.json(posts)
})

app.use((req, res, next) => {
    res.status(200)
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/',(req,res) => {
    res.send('Api is running.')
})

app.listen(process.env.PORT || 3000, ()=>console.log("server is running"))