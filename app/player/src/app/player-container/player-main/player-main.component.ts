import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
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
export class PlayerMainComponent implements OnChanges {
    //Inputs & Outputs
    @Input() addArtist:string;
    @Input() userEmail:string;
    @Input() otherUserMix;
    @Output() songList = new EventEmitter<Song[]>();
    @Output() playThisSong = new EventEmitter<number>();
    //models and variables
    artists: Artist[];
    singleArtist: Artist[];
    mixes: Mix;
    songs = [];
    currentEmail:string = "itsesisx";
    currentMixID: number = 1; //static assignment for now
    //END of variables

    //c'tor
    constructor (public playerService:PlayerService){
       
        this.playerService.getArtists("new")
            .subscribe(artists => {
                this.artists = artists;
            });

         this.buildSongByMix();  
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
                    let src:string = song.src;
                    this.songs.push(new Song(artistNames[i],id,name,likes,duration, src));
                });
        }
        this.songList.emit(this.songs);
    }

    addSong(songID:number) {
        let i;
        let songExists:boolean = false;
        //checks if song already in the list
        //if its not add to view and add to DB
        this.playerService.getSongByID(songID)
            .subscribe(res => {
                for(i=0; i<this.songs.length; i++) {
                    if(this.songs[i].id == songID){
                       songExists = true;
                    }
                }
                if(songExists == false) {
                    //getting the artist song and adding all song details in the view
                    this.playerService.getArtistBySong(songID)
                        .subscribe(artist => {
                            res.artist = artist[0].name;
                        });
                    this.songs.push(res)
                    this.playerService.addSongToMix(this.currentEmail, this.currentMixID, songID)
                        .subscribe(res => {
                            if(!res) {
                                console.log(res)
                            }
                    });
                }
            })
            console.log(this.songs);
    }

    playSong(songID:any) {
        this.playThisSong.emit(songID);
    }

    removeSong(songID:any) {
        for(let i=0; i<this.songs.length; i++) {
            if(this.songs[i].id == songID){
                this.songs.splice(i,1);
            }
        }
        this.playerService.removeSongFromMix(this.currentEmail, this.currentMixID, songID)
            .subscribe(res => {
                console.log(res);
            });
    }

    buildSongByMix() {
        this.playerService.getMixByUserID(this.currentEmail,this.currentMixID)
            .subscribe(mixes => {
                this.mixes = mixes;
                this.buildSongList(); 
            });   
    } 

    ngOnChanges() {
        if ( this.addArtist != null) {
            this.playerService.getBestSong(this.addArtist)
                .subscribe(song => {
                      this.addSong(song.id);
            });
        }
        if (this.userEmail !=null){
            this.currentEmail = this.userEmail;
        }

        if (this.otherUserMix != null) {
            this.mixes = this.otherUserMix;
            this.buildSongList();
        }
    } 
}
