import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishPageComponent } from './finish-page/finish-page.component';
import { LandingComponent } from './landing/landing.component';
import { ShiftingRoomComponent } from './shifting-room/shifting-room.component';
import { SigninComponent } from './signin/signin.component';
const routes: Routes = [
  {path:'', component:LandingComponent},
  {path:'signin',component:SigninComponent},
  {path:'shiftingroom',component:ShiftingRoomComponent},
  {path:'finishroom',component:FinishPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
