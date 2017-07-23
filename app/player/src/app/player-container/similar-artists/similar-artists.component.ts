import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayerService } from './../../services/player.service';
import { Artist } from './../../shared/artist.model';
import { Mix } from './../../shared/mix.model';
import { Song } from './../../shared/song.model';

@Component({
  selector: 'app-similar-artists',
  templateUrl: './similar-artists.component.html',
  styleUrls: ['./similar-artists.component.css'],
  providers: [PlayerService]
})
export class SimilarArtistsComponent {
  //models and variables
  artists = [];
  musicType:string = "new"; //@ToDo static, change to real type
  like; //image for like
  //End of variables

  //Outputs
  @Output() artistSelected = new EventEmitter<string>();
  @Output() artistPlayDemo = new EventEmitter<string>(); 
  
  //c'tor 
  constructor(public playerService:PlayerService) {
        
        this.playerService.getArtists(this.musicType)
            .subscribe(artists => {
                this.artists = artists;
            });
  }

  //sending the requested artist to the father component
  addSongToPlaylist(name:string) {
    this.artistSelected.emit(name);
  }

  playDemo(name:string) {
    this.artistPlayDemo.emit(name);
  }

  likedSong(name:string){
    //getting song id
    this.playerService.getBestSong(name)
      .subscribe(song => {
        //setting like by id
        this.playerService.addLike(song.id)
          .subscribe(res => {
            if (!res)
              console.log("error in like");
          })
      })
      for(let i=0; i<this.artists.length; i++){
        if(this.artists[i].name == name)
          this.artists[i].like = "true";
      }
      //console.log(this.artists); 
  }

}
