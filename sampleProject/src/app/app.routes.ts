import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { HomeComponent } from '../app/home/home.component';

export const routes: Routes = [

  { path: '', component : AppComponent },
  { path: 'home', component : HomeComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
