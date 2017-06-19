import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { PlayerContainerComponent } from './player-container/player-container.component';
import { PlayerHeaderComponent } from './player-container/player-header/player-header.component';
import { PlayerMainComponent } from './player-container/player-main/player-main.component';
import { PlayerNavComponent } from './player-container/player-nav/player-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    MainComponent,
    HeaderComponent,
    PlayerContainerComponent,
    PlayerHeaderComponent,
    PlayerMainComponent,
    PlayerNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
