import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
    loadedFeature = 'join';
    bgClasses = {
        'bg1':false,
        'bg2':false,
        'bg3':true,
        'bg4':false
    }
    i = 0;


    pageStage(feature:string) {
        this.loadedFeature = feature;
        this.changeBG();
    }

    changeBG() {
      // this.bgClasses[0] = true;
      // console.log(this.bgClasses[this.i]);
      // this.bgClasses[this.i] = false;
      // console.log(this.i);
      // this.bgClasses[this.i+1] = true;
      // console.log(this.i);
      // this.i = this.i+1;
      // console.log(this.i);
      // console.log(this.bgClasses[this.i]);
  
     
        if (this.bgClasses[0] === false)
          this.bgClasses[0] = true;
        else
          this.bgClasses[0] = false;
        if (this.bgClasses[1] === false)
          this.bgClasses[1] = true;
        else
          this.bgClasses[1] = false;

    }
  constructor() { 

  }

}
