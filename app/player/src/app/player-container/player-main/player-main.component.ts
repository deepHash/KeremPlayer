import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../services/player.service';
import { Artist } from './../../shared/artist.model';
import { Mix } from './../../shared/mix.model';
import { Song } from './../../shared/song.model';

@Component({
  selector: 'player-main',
  templateUrl: './player-main.component.html',
  styleUrls: ['./player-main.component.css'],
  providers: [PlayerService]
})
export class PlayerMainComponent {
    //models
    artists: Artist[];
    singleArtist: Artist[];
    mixes: Mix;
    songs: Song = new Song(1,"ab","cd",3,"5:5");
    //
    constructor (public playerService:PlayerService){
       
        this.playerService.getArtists("new")
            .subscribe(artists => {
                this.artists = artists;
            });

        this.playerService.getArtistbyName("שרית חדד")
            .subscribe(singleArtist => {
                this.singleArtist = singleArtist;
            });

        this.playerService.getMixByUserID(1,1)
            .subscribe(mixes => {
                this.mixes = mixes;
                this.buildSongList(); 
            });     

    }
    //will build a song list from the songs in mix
    buildSongList() {
        var artistNames: string[] = [];
        for(let i = 0; i < this.mixes.song.length; i++){
            this.playerService.getArtistBySong(this.mixes.song[i])
                .subscribe(artist => {    
                    //assigning all the names into an array
                    artistNames[i] = artist[0].name;
                });
        }
        for(let i = 0; i < this.mixes.song.length; i++){
            this.playerService.getSongByID(this.mixes.song[i])
                .subscribe(song => {
                    //@ToDo: add new song in array by loop
                });
        }
        console.log(artistNames);
    }  
}
