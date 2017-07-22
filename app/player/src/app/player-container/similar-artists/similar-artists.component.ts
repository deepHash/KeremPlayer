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
  artists: Artist[];
  musicType:string = "new"; //@ToDo static, change to real type
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

  likeSong(){
    
  }

}
