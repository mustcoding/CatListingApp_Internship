import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- Add this import

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CatService } from './cat.service'; // <-- Add your service here
import { CatListComponent } from './cat-list/cat-list.component'; // <-- Add your component here
import { TrylahComponent } from './trylah/trylah.component'; // <-- Add your component here

@NgModule({
  declarations: [
    AppComponent,
    CatListComponent,
    TrylahComponent // <-- Declare your component here
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule // <-- Include FormsModule here
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
