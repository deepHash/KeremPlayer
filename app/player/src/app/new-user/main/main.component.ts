import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../../services/player.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [PlayerService]
})
export class MainComponent {
    //variables
    loadedFeature = 'join';
    type :string;
    userDetails: any;
    userPassword: any;
    artistsSelected: any[];
    bgClasses = {
        'bg1':true,
        'bg2':false,
        'bg3':false,
        'bg4':false,
        'bg5':false,
        'bg6':false,
        'bg7':false,
        'bg8':false,
    }
    //End of variables

    constructor(private playerService:PlayerService) { }

    typeStage(type:string) {
        this.type = type;
    }

    pageStage(feature:string) {
        this.loadedFeature = feature;
        this.changeBG();
    }

    changeBG() {
        if (this.bgClasses.bg1 === true){
          this.bgClasses.bg1 = false;
          this.bgClasses.bg2 = true;
        }
        else if(this.bgClasses.bg2 === true){
          this.bgClasses.bg2 = false;
          this.bgClasses.bg3 = true;
        }
        else if(this.bgClasses.bg3 === true){
          this.bgClasses.bg3 = false;
          this.bgClasses.bg4 = true;
        }
         else if(this.bgClasses.bg4 === true){
          this.bgClasses.bg4 = false;
          this.bgClasses.bg5 = true;
        }
        else if(this.bgClasses.bg5 === true){
          this.bgClasses.bg5 = false;
          this.bgClasses.bg6 = true;
        }
         else if(this.bgClasses.bg6 === true){
          this.bgClasses.bg6 = false;
          this.bgClasses.bg7 = true;
        }
         else if(this.bgClasses.bg7 === true){
          this.bgClasses.bg7 = false;
          this.bgClasses.bg8 = true;
        }
    }

    setUserDetails(details:any){
      this.userDetails = details;    
    }

    setPassword(password:string){
      this.userPassword = password;
      this.newUserToService();
    }

    selectedArtistsByUser(artists:any[]) {
      this.artistsSelected = artists;
    }

    newUserToService() {
      let artists = [];
      for(let i=0; i<this.artistsSelected.length; i++) {
        this.playerService.getArtistbyName(this.artistsSelected[i])
          .subscribe(artist => {
              artists.push(artist);
              console.log(artist);    
          })
      }

      this.loadedFeature = 'player';
    }

  

}
