import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeatsComponent } from './beats/beats.component';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'beats',
    component: BeatsComponent
  },
  {
    path:'user',
    component: UserPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
