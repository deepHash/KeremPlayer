const express = require ('express'),
      bodyParser = require ('body-parser'),
      player = require ('./controllers'),
      app = express(),
      port = process.env.PORT || 3000,
      data = player();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.send("hi in index");
});

//route to get all the artists by type
app.get('/getAllArtists/:type', (req,res,next) => {
    data.getAllArtists(req.params.type).then((result,error) => {
        res.status(200).json(result);
    }, (error) => {
        console.log(error);
        next();
    });
});

//route to get an artist by name
app.get('/getArtistByName/:name', (req,res,next) => {
    data.getArtistByName(req.params.name).then((result,error) => {
        res.status(200).json(result);
    }, (error) => {
        console.log(error);
        next();
    });
});

//gets a users mix, params: user_id, mix_id
app.get('/getMixByUserID/:user_id/:mix_id', (req,res,next) => {
    data.getMixByUserID(req.params.user_id, req.params.mix_id).then((result,error) => {
        res.status(200).json(result);
    }, (error) => {
        console.log(error);
        next();
    });
});



app.all('*', (req, res) => {
    res.send(`error: route not found, global handler`);
});

app.listen(port);
console.log(`listening on port ${port}`);