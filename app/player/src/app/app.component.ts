import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    loadedScreen = 'new-user';
    userEmail:string;

    changeComponent(email:string) {
        this.userEmail = email;
        this.loadedScreen = 'player';
    }
}

