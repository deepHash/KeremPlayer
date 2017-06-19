import { EventEmitter, Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Artist } from '../shared/artist.model';

@Injectable()
export class PlayerService {
    itemAdded = new EventEmitter<Artist[]>();

    private artist: Artist[] = [];

    constructor(private http: Http) {this.getArtists();}

    private getArtistsDataFromDB() {
        this.http.get('https://localhost:3000/getAllArtists/new')
            .subscribe(
                (response: Response) => {
                    this.artist = response.json();
                    this.itemAdded.next(this.artist.slice());
                    console.log(this.artist);
                })
    }

    getArtists() {
        this.getArtistsDataFromDB();
        return this.artist.slice();
    }
}