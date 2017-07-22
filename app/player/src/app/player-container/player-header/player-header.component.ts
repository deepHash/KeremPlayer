import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from './../../services/player.service';
import { Artist } from './../../shared/artist.model';
import { Mix } from './../../shared/mix.model';
import { Song } from './../../shared/song.model';

@Component({
  selector: 'app-player-header',
  templateUrl: './player-header.component.html',
  styleUrls: ['./player-header.component.css'],
  providers: [PlayerService]
})
export class PlayerHeaderComponent {
    @Input() userEmail:string = "itsesisx";
    //models
    artists: Artist[];
    singleArtist: Artist[];
    mix: Mix;
    songs: Song[] = [];
    //
    
  constructor(private playerService:PlayerService) { 
      this.playerService.getMixByUserID(this.userEmail,1)
          .subscribe(mix => {
              this.mix = mix;
          });
  }
}
