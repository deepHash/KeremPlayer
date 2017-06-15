const express = require ('express'),
      bodyParser = require ('body-parser'),
      player = require ('./controllers'),
      app = express(),
      port = process.env.PORT || 3000,
      data = player(),
      type = "new";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.send("hi in index");
});

app.get('/getAllArtists', (req,res) => {
    res.status(200).json(data.getAllArtists(type));
})

app.all('*', (req, res) => {
    res.send(`error: route not found, global handler`);
});

app.listen(port);
console.log(`listening on port ${port}`);