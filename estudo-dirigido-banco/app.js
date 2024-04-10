const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const Movie = require('./model/Movie')

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado');
}).catch((err) => {
  console.error('Error', err.message);
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.post("/", async (req,res)=>{
    //console.log(req.body)
    const movie = new Movie({
        title: req.body.title,
        year: req.body.year
    });
    await movie.save()
    .then(data=>{
        res.json(data);
    })
    .catch(err =>{
        res.json({message: err});
        console.log(err)
    });
});

app.get("/filmes", async(req,res)=>{
    const movies = await Movie.find();
    res.json(movies);
});

app.get("/filme/:id", async(req,res)=>{
    const movies = await Movie.findById(req.params.id);
    res.json(movies);
});

app.get("/filmes/:title", async(req,res)=>{
    const movies = await Movie.find({title: req.params.title});
    res.json(movies);

});

app.patch("/filme/:id", async(req,res)=>{
    const updatedMovie = await Movie.updateOne(
        {_id: req.params.id}, 
        {$set: {title: req.body.title}});
    res.json(updatedMovie);
});

app.patch("/filmes", async(req,res)=>{
    const updatedMovie = await Movie.updateMany(
        {title: req.body.title}, 
        {year: req.body.year});
    res.json(updatedMovie);
});

app.delete("/filme/:id", async(req,res)=>{
    const removedMovie = await Movie.remove({_id: req.params.id});
    res.json(removedMovie);
});


// Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
