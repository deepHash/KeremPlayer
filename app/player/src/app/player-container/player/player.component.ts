import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Output() playSong = new EventEmitter<string>();
  @Output() pauseSong = new EventEmitter<string>();
  @Output() nextSong = new EventEmitter<string>();
  @Output() prevSong = new EventEmitter<string>();
  playButtonStatus:string = "./assets/player/play.png";
  playButtonFlag:boolean = false;  
  constructor() { }

  play() {
      if (!this.playButtonFlag) {
          this.playButtonStatus = "./assets/player/pause.png";
          this.playButtonFlag = true;
          this.playSong.emit();
      }
      else {
          this.playButtonStatus = "./assets/player/play.png"
          this.playButtonFlag = false;
          this.pauseSong.emit();
      }
  }

  prev() {
      this.prevSong.emit();
  }

  next(){
      this.nextSong.emit();
  }

  ngOnInit() {
  }

}
