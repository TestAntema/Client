import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VoitureListComponent} from "./components/voiture-list/voiture-list.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'/voitures',
    pathMatch: 'full'
  },
  {
    path:'voitures',
    component: VoitureListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
