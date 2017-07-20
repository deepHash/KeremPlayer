import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-container',
  templateUrl: './player-container.component.html',
  styleUrls: ['./player-container.component.css']
})
export class PlayerContainerComponent implements OnInit {
  artistName:string;  
  constructor() { }

  addArtist(name: string) {
      this.artistName = name;  
  }

  ngOnInit() {
  }

}
