var mongoose = require('mongoose'),
    schema   = mongoose.Schema,
    
    ArtistSchema = new schema({
        name: {type:String, required:true},
        photo: String,
        musictype: String,
        songs:[{ 
            id: {type:Number, index:1, required:true, unique:true},
            name: String,
            likes: Number
        }]
    }, {collection: 'Artist'});

var Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;