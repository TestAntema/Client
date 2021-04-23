import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { VoitureListComponent } from './components/voiture-list/voiture-list.component';
import { SinginComponent } from './components/singin/singin.component';
import { SingoutComponent } from './components/singout/singout.component';
import {VoitureService} from "./services/voiture.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    VoitureListComponent,
    SinginComponent,
    SingoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    VoitureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
