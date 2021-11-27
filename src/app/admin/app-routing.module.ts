import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllusersComponent } from './allusers/allusers.component';
import { DashboardComponent } from './dashboard/dashboard.component';

console.log("test");

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'allusers', component: AllusersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
