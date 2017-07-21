import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayerService } from './../../../services/player.service';
import { Artist } from './../../../shared/artist.model';
@Component({
  selector: 'app-artists-type',
  templateUrl: './artists-type.component.html',
  styleUrls: ['./artists-type.component.css'],
  providers: [PlayerService]
})
export class ArtistsTypeComponent implements OnInit {
  artists: Artist[];
  musicType:string = "new";

   @Output() artistSelected = new EventEmitter<string>(); 
  
  //c'tor 
  constructor(public playerService:PlayerService) {
        
        this.playerService.getArtists(this.musicType)
            .subscribe(artists => {
                this.artists = artists;
            });
  }
 

  ngOnInit() {
  }

}
