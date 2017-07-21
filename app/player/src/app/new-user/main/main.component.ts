import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
    loadedFeature = 'join';
    type :string;
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

    typeStage(type:string) {
        this.type = type;
        console.log(type);
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
  constructor() { 

  }

}
