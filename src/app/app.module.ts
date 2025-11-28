import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CommonModule } from '@angular/common';
import { NgxParticlesModule } from '@tsparticles/angular';
import { FooterComponent } from './home/components/footer/footer.component';
import { AboutComponent } from './home/components/about/about.component';
import { HeaderComponent } from './home/components/header/header.component';
import { HeroComponent } from './home/components/hero/hero.component';
import { ProjectsComponent } from './home/components/projects/projects.component';
import { ModalComponent } from './home/components/shared/modal/modal.component';
import { SocialsIconsComponent } from './home/components/shared/socials-icons/socials-icons.component';
import { Background } from '@tsparticles/engine';
import { BackgroundAnimationComponent } from './home/components/background-animation/background-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    HeaderComponent,
    HeroComponent,
    ProjectsComponent,
    ModalComponent,
    SocialsIconsComponent,
    BackgroundAnimationComponent,
  ],
  imports: [CommonModule, BrowserModule, AppRoutingModule, NgxParticlesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
