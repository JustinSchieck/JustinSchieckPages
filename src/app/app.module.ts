import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CommonModule } from '@angular/common';
import { NgxParticlesModule } from '@tsparticles/angular';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, NgxParticlesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
