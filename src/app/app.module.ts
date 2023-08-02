import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './signin/signin.component';
import { ShiftingRoomComponent } from './shifting-room/shifting-room.component';
import { FinishPageComponent } from './finish-page/finish-page.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SigninComponent,
    ShiftingRoomComponent,
    FinishPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
