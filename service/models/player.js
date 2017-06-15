var mongoose = require('mongoose'),
    schema   = mongoose.Schema,

    UserSchema = new schema({
        id: {type:Number, index:1, required:true, unique:true},
        name: String,
        mail: {type:String, required:true},
        birthday: Date,
        password: String,
        musictype: String,
        favourites: [String],
        mixes: {
            id: {type:Number, index:1, required:true, unique:true},
            name: String,
            photo: String,
            song: [Number]
        }
    } {collection: 'User'});

    ArtistSchema = new schema({
        name: {type:String, required:true},
        musictype: String,
        songs: {
            id: {type:Number, index:1, required:true, unique:true},
            name: String,
            photo: String,
            likes: Number
        }
    } {collection: 'Artist'});

    var User = mongoose.model('User', UserSchema);
        Artist = mongoose.model('Artist', ArtistSchema);

    module.exports = {
        User: User,
        Artist: Artist
    };