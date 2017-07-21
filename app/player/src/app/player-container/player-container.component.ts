import { Component, OnInit } from '@angular/core';
import { Artist } from './../shared/artist.model';
import { Mix } from './../shared/mix.model';
import { Song } from './../shared/song.model';
import { PlayerService } from './../services/player.service';


@Component({
  selector: 'app-player-container',
  templateUrl: './player-container.component.html',
  styleUrls: ['./player-container.component.css'],
  providers:[PlayerService]
})
export class PlayerContainerComponent implements OnInit {
  //variables
  loadedSection:string = 'list'; //var for section to show from nav
  artistName:string; // artist that have been added from similar artists
  audio = new Audio(); // audio helper
  currentSong:number = 0; // current song flag
  songlist: Song;
  constructor() { }

  setSongList(songlist) {
      this.songlist = songlist;
      console.log(this.songlist);
  }

  addArtist(name: string) {
      this.artistName = name;  
  }

  onNav(section: string) {
      this.loadedSection = section;
  }

  play(state) {

  }

  pause(state) {

  }

  next(state) {

  }

  prev(state) {
      
  }

  ngOnInit() {
      // this.audio.src = "../../assets/Sleep Away.mp3"
      // this.audio.load();
      //this.audio.play();
  }

}
