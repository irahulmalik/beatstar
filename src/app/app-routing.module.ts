import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeatsComponent } from './beats/beats.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'beats',
    component: BeatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
