import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
    loadedFeature = 'join';
    bgClasses = {
        'bg1':true,
        'bg2':false
    }
  i = 0;


    pageStage(feature:string) {
        this.loadedFeature = feature;
        this.changeBG();
    }

    changeBG() {
        this.bgClasses[this.i] = false;
        this.bgClasses[this.i+1] = true;
        this.i = this.i+1;
    }
  constructor() { 

  }

}
