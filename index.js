const express = require('express')
const app = express()
const posts = require('./posts')

app.get('/posts', (req,res) => {
    res.json(posts)
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

app.get('/',(req,res) => {
    res.send('Api is running.')
})

app.listen(process.env.PORT || 3000, ()=>console.log("server is running"))