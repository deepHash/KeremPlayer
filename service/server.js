const express = require ('express'),
      bodyParser = require ('body-parser'),
      player = require ('./controllers'),
      app = express(),
      port = process.env.PORT || 3000,
      data = player();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));

app.set('port',port);
//api
app.get('/', (req,res) => {
            res.sendFile(`${__dirname}/public/api.html`);
}); 
//api logo
app.get('/include/icon.jpeg', (req,res) => {
    res.sendFile(`${__dirname}/public/include/icon.jpeg`);
});

app.use(
    (req,res,next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept");
        res.set("Content-Type", "application/json");
        next();
});

//route to get the user info, params: user_email
app.get('/getUserByMail/:user_email', (req,res) => {
    data.getUserByMail(req.params.user_email).then((result,error) => {
        res.status(200).json(result);
    });
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

//route to get an artist info by a song id
app.get('/getArtistBySong/:song_id', (req,res,next) => {
    data.getArtistBySong(req.params.song_id).then((result,error) => {
        res.status(200).json(result);
    }, (error) => {
        console.log(error);
        next();
    });
});

//gets a users mix, params: email, mix_id
app.get('/getMixByUserID/:email/:mix_id', (req,res,next) => {
    data.getMixByUserID(req.params.email, req.params.mix_id).then((result,error) => {
        res.status(200).json(result);
    }, (error) => {
        console.log(error);
        next();
    });
});

//gets song by the artist name, params: name
app.get('/getSongsByArtist/:name', (req,res,next) => {
    data.getSongsByArtist(req.params.name).then((result,error) => {
        res.status(200).json(result);
    }, (error) => {
        console.log(error);
        next();
    });
});
 
//removes a song from a users mix, params: user_id, mix_id, song_id
app.get('/removeSongFromMix/:email/:mix_id/:song_id', (req,res,next) => {
    data.removeSongFromMix(req.params.email, req.params.mix_id, 
                            req.params.song_id).then((result,error) => {
        res.status(200).json(result);
    }, (error) => {
        console.log(error);
        next();
    });    
});

//adds a song to a users mix, params: user_id, mix_id, song_id
app.get('/addSongToMix/:email/:mix_id/:song_id', (req,res,next) => {
    data.addSongToMix(req.params.email, req.params.mix_id, 
                            req.params.song_id).then((result,error) => {
        res.status(200).json(result);
    }, (error) => {
        console.log(error);
        next();
    });    
});

//increment a like by 1 in a spesific song, params: song_id
app.get('/addLike/:song_id', (req,res,next) => {
        data.addLike(req.params.song_id).then((result,error) => {
        res.status(200).json(result);
    }, (error) => {
        console.log(error);
        next();
    });    
});

//get mixes
app.get('/getMixes/', (req,res,next) => {
    data.getMixes().then((result, error) => {
        res.status(200).json(result);    
    }, (error) => {
        console.log(error);
        next();
    })
}) 

//gets a song
app.get('/getSong/:song_id', (req,res,next) => {
        data.getSong(req.params.song_id).then((result,error) => {
        res.status(200).json(result);
    }, (error) => {
        console.log(error);
        next();
    });    
});

//gets the songs ids of a spesific users mix, params: user_id, mix_id
app.get('/getSongsFromMix/:user_id/:mix_id', (req,res) => {
        data.getSongsFromMix(req.params.user_id, req.params.mix_id).then((result,error) => {
        res.status(200).json(result);
    }, (error) => {
        console.log(error);
        next();
    });    
});

//gets the most liked song by artist name
app.get('/getBestSongByArtist/:name', (req,res,next) => {
    data.getBestSongByArtist(req.params.name).then((result,error) => {
        res.status(200).json(result);
    }, (error) => {
        console.log(error);
        next();
    });
});

//creates new user
app.get('/createNewUser/:name/:mail/:birthday/:password/:musictype', (req,res,next) => {
    data.createNewUser(req.params.name,req.params.mail,req.params.birthday,req.params.password,req.params.musictype).then((result,error) => {
        res.status(200).json(result);
    }, (error) => {
        console.log(error);
        next();
    });
});

//error 404 route
app.all('*', (req, res) => {
    res.send(`error: route not found, global handler`);
});

app.listen(port,
    () => {
        console.log(`listening on port ${port}`);
});