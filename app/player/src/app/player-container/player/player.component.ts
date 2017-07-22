import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() currentSong;
  @Output() playSong = new EventEmitter<any>();
  @Output() pauseSong = new EventEmitter<any>();
  @Output() nextSong = new EventEmitter<any>();
  @Output() prevSong = new EventEmitter<any>();
  playButtonStatus:string;
  static playButtonFlag:boolean = false;  
  constructor() {
      if (!PlayerComponent.playButtonFlag)
          this.playButtonStatus = "./assets/player/play.png";
      else 
          this.playButtonStatus = "./assets/player/pause.png"
  }
  play() {
      if (!PlayerComponent.playButtonFlag) {
          this.playButtonStatus = "./assets/player/pause.png";
          PlayerComponent.playButtonFlag = true;
          this.playSong.emit();
      }
      else {
          this.playButtonStatus = "./assets/player/play.png"
          PlayerComponent.playButtonFlag = false;
          this.pauseSong.emit();
      }
  }

  prev() {
      this.prevSong.emit();
  }

  next(){
      this.nextSong.emit();
  }

  ngOnChanges() {
      if (this.currentSong != null)
          console.log(this.currentSong);
  }

  ngOnInit() {
  }

}
