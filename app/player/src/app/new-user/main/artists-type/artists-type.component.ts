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
  @Output() featureSelected = new EventEmitter<string>();
  @Output() selectedArtists = new EventEmitter<any[]>();
  artists: Artist[];
  pickedByUser = [];
  
  //c'tor 
  constructor(public playerService:PlayerService) { }

    onSelect(feature:string) {
        this.featureSelected.emit(feature);
        this.sendArtists();
    } 
  

//gets artists picked by user, send them into array, checks for double picks.  
pickedArtist(name:any){
  let artistAlreadyPickedFlag:boolean = false;
  for(let i=0; i< this.pickedByUser.length; i++) {
    if (this.pickedByUser[i] == name){
      artistAlreadyPickedFlag = true;
      break;
    }
  }
  if (artistAlreadyPickedFlag == false)
    this.pickedByUser.push(name);  
}

sendArtists(){
  this.selectedArtists.emit(this.pickedByUser)
} 

//runs after we get the musictype input
  ngOnChanges() {
    if(this.musicType != null) {
       this.playerService.getArtists(this.musicType)
            .subscribe(artists => {
                this.artists = artists;
            });
    }
  }


}
