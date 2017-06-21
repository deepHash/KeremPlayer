import { Component } from '@angular/core';
import { PlayerService} from './main/player.service';
import { Artist } from './shared/artist.model';
import { Mix } from './shared/mix.model';
import { Song } from './shared/song.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService]
})
export class AppComponent {
    //models
    artists: Artist[];
    singleArtist: Artist[];
    mixes: Mix;
    songs: Song[] = [];
    //
    constructor (private playerService:PlayerService){
       
        this.playerService.getArtists("new")
            .subscribe(artists => {
                this.artists = artists;
            });

        this.playerService.getArtistbyName("שרית חדד")
            .subscribe(singleArtist => {
                this.singleArtist = singleArtist;
                console.log(singleArtist);
            });

        // this.playerService.getMixByUserID(1,1)
        //     .subscribe(mixes => {
        //         this.mixes = mixes;
        //         console.log(this.mixes);
        //     });
 
        // this.playerService.getSong(2)
        //     .subscribe(song => {
        //         console.log(song);
        //         this.songs.push(song);
        //     });                

       
    }  
}
