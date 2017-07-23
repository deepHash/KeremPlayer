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
        return this.http.get(`${this.apiUrl}/getArtistbyName/${name}`)
            .map(res => res.json());
    }

    getMixByUserID(email,mixID) {
        return this.http.get(`${this.apiUrl}/getMixByUserId/${email}/${mixID}`)
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

    addSongToMix(email, mixID, songID) {
        return this.http.get(`${this.apiUrl}/addSongToMix/${email}/${mixID}/${songID}`)
            .map(res => res.json());
    }

    removeSongFromMix(email, mixID, songID) {
        return this.http.get(`${this.apiUrl}/removeSongFromMix/${email}/${mixID}/${songID}`)
            .map(res => res.json());
    }

    getBestSong(name) {
        return this.http.get(`${this.apiUrl}/getBestSongByArtist/${name}`)
            .map(res => res.json());
    }

    getMixes() {
        return this.http.get(`${this.apiUrl}/getMixes`)
            .map(res => res.json());
    }

    createNewUser(user) {
        return this.http.get(`http://localhost:3000/createNewUser/${user}`)
            .map(res => res.json())
    }

    addLike(song_id) {
        return this.http.get(`${this.apiUrl}/addLike/${song_id}`)
            .map(res => res.json())
    }    
}