import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { VideosComponent } from './videos/videos.component';
=======
import { RegisterComponent } from './register/register.component';
>>>>>>> origin/register
=======
>>>>>>> 04e950948d5d59ddc1db52cb1d1e28a1adf3421b

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
<<<<<<< HEAD
    ContactUsComponent,
<<<<<<< HEAD
    VideosComponent
=======
    RegisterComponent
>>>>>>> origin/register
=======
    ContactUsComponent
>>>>>>> 04e950948d5d59ddc1db52cb1d1e28a1adf3421b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
