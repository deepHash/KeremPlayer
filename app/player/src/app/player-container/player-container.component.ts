import { Component, OnInit, Input, Output, DoCheck, AfterViewChecked, AfterContentChecked } from '@angular/core';
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
  //input
  @Input() userEmail:string;
  //variables
  loadedSection:string = 'list'; //var for section to show from nav
  artistName:string; // artist that have been added from similar artists
  audio = new Audio(); // audio helper
  currentSong:number = 0; // current song flag
  songlist: Song[];
  time:number = 0;
  playing:boolean;
  otherUserMix;
  resetPlayList = false;
  constructor(private playerService: PlayerService) { }

  //setting the songlist the recieved from son component (player-main)
  setSongList(songlist) {
      this.songlist = songlist;
  }

  //recieving from son component (similar-artitsts) the name of the artist
  //to add to playlist, and will pass it to another son to call the adding
  //service in (player-main) component
  addArtist(name: string) {
      this.artistName = name;  
  }

  playDemo(name: string) {
      let demo = new Audio();
      let playedBefore:boolean = false;
      this.playerService.getBestSong(name)
          .subscribe( song => {
              demo.src = song.src;
          });
       if (this.playing == true){
           this.pause("status");
           playedBefore = true;
       }
       demo.load();
       demo.currentTime = 100;
       demo.play();
       setTimeout(() => demo.pause(), 6000);
       if (playedBefore == true)
           setTimeout(() => this.play("status"), 9000);
  }

  //loading the section that recieved from sidebar
  onNav(section: string) {
      if (section != "myPlaylist")
          this.loadedSection = section;
      else {
          this.resetPlayList = true;
      }
  }

  //play function, will load the current song if it has been paused it will 
  //continue to play it from the time it has been paused
  play(state) {
      if(this.time == 0) {
          this.audio.src = this.songlist[this.currentSong].src;
          this.audio.load();
      }
      this.audio.play();
      this.playing = true;
  }    
  //pause function, savinging current song time, pausing and setting flag to false
  pause(state) {
      this.time = this.audio.currentTime;
      this.audio.pause();
      this.playing = false;
  }    
  //next function, checking to see if its last song or not, if not set time to zero
  //play the next song if in state of playing and not pause
  next(state) {
      if ( this.currentSong+1 != this.songlist.length){
          this.time = 0;
          this.currentSong++;
          if (this.playing == true)
              this.play("state");
      }
  }
  //prev function, checking to see if there are previous songs, if not skip, if yes
  // lower currentsong counter and set time to zero, if in state of playing and not pause
  // play the song
  prev(state) {
      if (this.currentSong != 0){
          this.time = 0;
          this.currentSong--;    
          if (this.playing == true)
              this.play("state");
      }
  }

  switchSong(songID) {
      for (let i=0; i < this.songlist.length; i++) {
          if (this.songlist[i].id == songID) {
              this.currentSong = i;
              this.time = 0;
              if (this.playing == true)
                  this.play("state");
          }
      }
  }

  addOtherMix(song) {
      this.otherUserMix = song;
  }

  ngOnInit() {

  }

}
