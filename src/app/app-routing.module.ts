import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  //Default route will redirect to the dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //This route will redirect to the hero list
  { path: 'heroes', component: HeroesComponent },
  //This route will redirect to the hero dashboard
  { path: 'dashboard', component: DashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
