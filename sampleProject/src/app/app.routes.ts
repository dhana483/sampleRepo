import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component'
export const routes: Routes = [

  { path: '', component : MainComponent , children: [
      { path: 'home', component : HomeComponent }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
