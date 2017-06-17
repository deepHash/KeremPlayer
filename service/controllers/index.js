'use strict';
const   consts   = require('./data/consts'),
        mongoose = require('mongoose'),
        Artist   = require('./../models/artist'),
        User     = require('./../models/user'),
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
    };

    getAllArtists(type) {
        return new Promise((resolve, reject) => {
            Artist.find({musictype: `${type}`}, '-_id',
                (err, result) => {
                    if (err) reject (err);
                    else resolve (result);
                });
        });
    };
    
    getArtistByName(name) {
        return new Promise((resolve, reject) => {
            Artist.find({name: `${name}`}, '-_id',
                (err, result) => {
                    if (err) reject (err);
                    else resolve (result);
                });
        });
    }

    getMixByUserID(user_id, mix_id) {
        return new Promise((resolve, reject) => {
            User.find({id: `${user_id}`, 'mixes.id': `${mix_id}`}, '-_id',
                (err, result) => {
                    if (err) reject (err);
                    else resolve (result);
                });
        });
    };

    getSongsByArtist(name) {
        var songs;
        Artist.find({name: `${name}`}, (err, result) => {
            this.songs = result[0].songs;
            
        }, (err) => {
            console.log(err);
        });
        return (this.songs);
    };

    removeSongFromMix(user_id, mix_id, song_id) {
        return new Promise((resolve, reject) => {
            User.update({id: `${user_id}`, 'mixes.id': `${mix_id}`},
                        { $pull: {'mixes.song': `${song_id}`}},
                (err, result) => {
                    if (err) reject (err);
                    else resolve (result);
                });    
        });
    };

}

module.exports = () => {
    var player = new Player();
    return player;
}