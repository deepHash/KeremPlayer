'use strict';
const   consts   = require('./data/consts'),
        mongoose = require('mongoose'),
        Artist   = require('./../models/artist'),
        promise  = require('promise');

mongoose.Promise = global.Promise;
mongoose.connect(consts.MLAB_KEY);
var conn = mongoose.connection;

class Player {

    constructor(){
        conn.on('error',
        (err) => {
            console.log(`connection error: ${err}`);
        });     
    }

    getAllArtists(type) {
        console.log("in this func");
        return new Promise((resolve, reject) => {
            Artist.find({}, '-_id',
                (err, result) => {
                    if (err) reject (err);
                    else resolve (result);
                    console.log(result);
                })
        })
    }
}

module.exports = () => {
    var player = new Player();
    return player;
}