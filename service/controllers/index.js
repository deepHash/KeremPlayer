'use strict';
const   mongoose = require('mongoose'),
        Artist   = require('./../models/artist'),
        User     = require('./../models/user'),
        promise  = require('promise');

class Player {

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

    getArtistBySong(song_id) {
        return new Promise((resolve, reject) => {
            Artist.find({'songs.id': song_id}, '-songs -_id',
                (err, result) => {
                    if (err) reject (err);
                    else resolve (result);
                });
        });
    };

    getUserByMail(user_email) {
        return new Promise((resolve, reject) => {
            User.findOne({mail: user_email}, '-_id -mixes',
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

    getSongsFromMix(user_id, mix_id) {
        return new Promise((resolve, reject) => {
            User.findOne({id: `${user_id}`, 'mixes.id': `${mix_id}`}, 'mixes -_id',
                (err, result) => {
                    if (err) reject (err);
                    else {
                        if (!result)
                            resolve(err);
                        else
                        {   
                            //ToDo 20/06/207 - fix the bug that findOne gets all the mixes from user
                            //the following code is a plaster to pick the mix with mix_id
                            let mix = [];
                            for (let i in result.mixes)
                                if (result.mixes[i].id == mix_id){
                                    mix = result.mixes[i].song;
                                    break;
                                }
                               
                        }
                    }
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

    getSong(song_id) {
        return new Promise((resolve, reject) => {
            Artist.findOne({'songs.id': `${song_id}`},
                (err, result) => {
                    if (err) reject (err);
                    else {
                        if (!result)
                            resolve(err);
                        else
                        {
                            let songs = result._doc.songs;
                            for (let i in songs){
                                if (songs[i].id == song_id)
                                    resolve(songs[i]);
                            }    
                        }
                    } 
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