const { response } = require('express');
const express = require('express');
const { homedir } = require('os');
const app = express(); /* To initialize express - backend and giving all those 
functionalities to 'app'*/

app.use(express.static('public'))


app.get('/home', (req, res, next) => {
    
    res.sendFile(__dirname + '/public/views/home.html')
    
}); 

app.get('/about', (req, res, next) => {
    console.log(req);
    res.sendFile(__dirname + '/public/views/about.html');
  });

app.get('/works', (req, res, next) => {
    console.log(req);
    res.sendFile(__dirname + '/public/views/works.html');
  });

app.get('/gallery', (req, res, next) => {
    console.log(req);
    res.sendFile(__dirname + '/public/views/gallery.html');
  });

app.listen(3000, () => {
    console.log('Running on port 3000')
})