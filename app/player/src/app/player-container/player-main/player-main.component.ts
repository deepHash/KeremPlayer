import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../services/player.service';
import { Artist } from './../../shared/artist.model';
import { Mix } from './../../shared/mix.model';
import { Song } from './../../shared/song.model';

@Component({
  selector: 'player-main',
  templateUrl: './player-main.component.html',
  styleUrls: ['./player-main.component.css'],
  providers: [PlayerService] //main service provider
})
export class PlayerMainComponent {
    //models and variables
    artists: Artist[];
    singleArtist: Artist[];
    mixes: Mix;
    songs: Song[] = [];
    currentMixID: number = 1; //static assignment for now
    userID: number = 1;        //@ToDo take parameter from father
    //END of variables

    //c'tor
    constructor (public playerService:PlayerService){
       
        this.playerService.getArtists("new")
            .subscribe(artists => {
                this.artists = artists;
            });

        this.playerService.getArtistbyName("שרית חדד")
            .subscribe(singleArtist => {
                this.singleArtist = singleArtist;
            });

            this.test();  

    }

    //will build a song list from the songs in mix
    buildSongList() {
        let artistNames: string[] = [];
        this.songs = [];
        for(let i = 0; i < this.mixes.song.length; i++){
            this.playerService.getArtistBySong(this.mixes.song[i])
                .subscribe(artist => {    
                    //assigning all the names into an array
                    artistNames[i] = artist[0].name;
                });
        }
        //loop through the songs and get the song details assign to song array
        //with the artists list we got from the previous service (artistNames)
        for(let i = 0; i < this.mixes.song.length; i++){
            this.playerService.getSongByID(this.mixes.song[i])
                .subscribe(song => {
                    let id:number = song.id;
                    let name:string = song.name;
                    let likes:number = song.likes;
                    let duration:string = song.duration;
                    this.songs.push(new Song(artistNames[i],id,name,likes,duration));
                });
        }
    }

    removeSong(songID:any) {
        this.playerService.removeSongFromMix(this.userID, this.currentMixID, songID)
            .subscribe(res => {
                if (res) {
                    this.test();
                }
            });
    }

    test() {
        this.playerService.getMixByUserID(this.userID,this.currentMixID)
            .subscribe(mixes => {
                this.mixes = mixes;
                this.buildSongList(); 
            });   
    }  
}
