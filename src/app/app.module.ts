import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
<<<<<<< HEAD
import { VideosComponent } from './videos/videos.component';
=======
import { RegisterComponent } from './register/register.component';
>>>>>>> 3f9e79e1df244cad7f203ef868c13f0339d558af

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
<<<<<<< HEAD
    VideosComponent
=======
    RegisterComponent
>>>>>>> 3f9e79e1df244cad7f203ef868c13f0339d558af
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
