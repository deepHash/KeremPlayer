import { EventEmitter, Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Mix } from '../shared/mix.model';
import { Song } from '../shared/song.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx'

@Injectable()
export class PlayerService {
    mixes: Mix;
    constructor(private http: Http) {}
    apiUrl:string = 'https://kerem2017.herokuapp.com';
    
    getArtists(type) {
        return this.http.get(`${this.apiUrl}/getAllArtists/${type}`)
            .map(res => res.json());
    }

    getArtistbyName(name) {
        return this.http.get('https://kerem2017.herokuapp.com/getArtistbyName/%D7%A9%D7%A8%D7%99%D7%AA%20%D7%97%D7%93%D7%93')
            .map(res => res.json());
    }

    getMixByUserID(userID,mixID) {
        return this.http.get(`${this.apiUrl}/getMixByUserId/${userID}/${mixID}`)
            .map(res => res.json());
    }

    getSongByID(id) {
        return this.http.get(`${this.apiUrl}/getSong/${id}`)
            .map(res => res.json());
    }

    getArtistBySong(id) {
        return this.http.get(`${this.apiUrl}/getArtistBySong/${id}`)
            .map(res => res.json());
    }

    addSongToMix(userID, mixID, songID) {
        return this.http.get(`${this.apiUrl}/addSongToMix/${userID}/${mixID}/${songID}`)
            .map(res => res.json());
    }

    removeSongFromMix(userID, mixID, songID) {
        return this.http.get(`${this.apiUrl}/removeSongFromMix/${userID}/${mixID}/${songID}`)
            .map(res => res.json());
    }

    getBestSong(name) {
        return this.http.get(`${this.apiUrl}/getBestSongByArtist/${name}`)
            .map(res => res.json());
    }    
}