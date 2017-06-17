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
        return new Promise((resolve, reject) => {
            Artist.find({musictype: `${type}`}, '-_id',
                (err, result) => {
                    if (err) reject (err);
                    else resolve (result);
                });
        });
    }
    
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
    }

    addLike(song_id) {
        return new Promise((resolve, reject) => {
            Artist.update(
                { 'songs.id' : `${song_id}` },
                {$set:{'songs.$.likes': 10}},
                (err, result) => {
                    if (err) reject (err);
                    else resolve (result);
                });
       });
    }
// addLike(song_id) {
//         return new Promise((resolve, reject) => {
//             Artist.update(
//                 for(let i in Artist)
//                 {
//                     if
//                 }
//                 { 'songs[].id' : `${song_id}` },
//                 {$set:{'songs[].likes' : 0}},
//                 (err, result) => {
//                     if (err) reject (err);
//                     else resolve (result);
//                 });
//        });
//     }

       // { $inc: { "likes" : 1 } }
 // Artist.update(
 //                { 'songs[].id' : `${song_id}` },
 //                {$set:{'songs[].likes' : 0}},
 //                (err, result) => {
 //                    if (err) reject (err);
 //                    else resolve (result);
 //                });

 }   //    var condition = {name:`${name}`},
    //    update         = {'likes': 4};
    //    Artist.update(conditions ,likes
    //     (err) => {
    //         if(err)

    //     } 
    //     );
    // }





module.exports = () => {
    var player = new Player();
    return player;
}