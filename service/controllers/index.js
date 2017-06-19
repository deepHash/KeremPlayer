'use strict';
const   mongoose = require('mongoose'),
        Artist   = require('./../models/artist'),
        User     = require('./../models/user'),
        promise  = require('promise');

class Player {
    constructor() {    };

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
    };

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
        return new Promise((resolve, reject) => {
            Artist.find({name: `${name}`},
                (err, result) => {
                    if (err) reject (err);
                    else resolve (result[0].songs);
                });
        });
    };

    removeSongFromMix(user_id, mix_id, song_id) {
        return new Promise((resolve, reject) => {
            User.update({id: `${user_id}`, 'mixes.id': `${mix_id}`},
                        { $pull: {'mixes.$.song': `${song_id}`}},
                (err, result) => {
                    if (err) reject (err);
                    else resolve (result);
                });    
        });
    };

    addLike(song_id) {
        return new Promise((resolve, reject) => {
            Artist.update(
                { 'songs.id': `${song_id}` },
                {$inc:{'songs.$.likes': 1}},
                (err, result) => {
                    if (err) reject (err);
                    else resolve (result);
                });
       });
    }
 } 


module.exports = () => {
    var player = new Player();
    return player;
}