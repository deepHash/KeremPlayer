import { Component, OnInit } from '@angular/core';
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
    //models
    artists: Artist[];
    singleArtist: Artist[];
    mix: Mix;
    songs: Song[] = [];
    //
  constructor(private playerService:PlayerService) { 
      this.playerService.getMixByUserID(1,1)
          .subscribe(mix => {
              this.mix = mix;
          });
  }
}
