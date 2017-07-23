import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayerService } from './../../services/player.service';
import { Artist } from './../../shared/artist.model';
import { Mix } from './../../shared/mix.model';
import { Song } from './../../shared/song.model';

@Component({
  selector: 'app-similar-mixes',
  templateUrl: './similar-mixes.component.html',
  styleUrls: ['./similar-mixes.component.css'],
    providers: [PlayerService] //main service provider
})
export class SimilarMixesComponent {
    //variables and models
    mixes: Mix[] = [];
    @Output() otherMix = new EventEmitter<any>();
    //END of variables
  constructor(public playerService:PlayerService) { 
      this.playerService.getMixes()
          .subscribe(mixes => {
              for(let i = 0; i < mixes.length; i++) {
                  let artist = mixes[i].name;
                  let musicType = mixes[i].musictype;
                  //in certain user has more than one mix this will loop for it
                  // and get all the mixes under his name
                  for(let j = 0; j< mixes[i].mixes.length; j++) {
                      let id = mixes[i].mixes[j].id;
                      let name = mixes[i].mixes[j].name;
                      let photo = mixes[i].mixes[j].photo;
                      let song = [];
                      song = mixes[i].mixes[j].song;
                      this.mixes.push(new Mix(artist,id,name,photo,musicType,song));   
                  }
              }
       });

  }

  addMix(mix) {
      this.otherMix.emit(mix)
  }
              
}
