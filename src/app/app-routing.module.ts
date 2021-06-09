import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
const routes: Routes = [
{path:'',component:DashboardComponent},
{path:'about',component:AboutComponent},
{path:'dashboard',component:DashboardComponent},
{path:'courses',component:CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
