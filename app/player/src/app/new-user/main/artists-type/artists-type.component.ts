import { Component, OnInit, OnChanges, Output,Input, EventEmitter } from '@angular/core';
import { PlayerService } from './../../../services/player.service';
import { Artist } from './../../../shared/artist.model';
@Component({
  selector: 'app-artists-type',
  templateUrl: './artists-type.component.html',
  styleUrls: ['./artists-type.component.css'],
  providers: [PlayerService]
})
export class ArtistsTypeComponent implements OnChanges {
  @Input() musicType:string;
  artists: Artist[];
  
  //@Output() artistSelected = new EventEmitter<string>(); 
  

  //c'tor 
  constructor(public playerService:PlayerService) {
        
       
  }
pickedArtist(id:any){
console.log(id);
} 

  ngOnChanges() {
    console.log(this.musicType); 
    if(this.musicType != null) {
       this.playerService.getArtists(this.musicType)
            .subscribe(artists => {
                this.artists = artists;
            });
    }
  }


}
