import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddComponent } from './components/employee/add/add.component';
import { DeleteComponent } from './components/employee/delete/delete.component';
import { EditComponent } from './components/employee/edit/edit.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
{path:"dashboard",component:DashboardComponent},
{path:"",component:LoginComponent},
{path:"add",component:AddComponent},
{path:"edit/:id",component:EditComponent},
{path:"delete/:id",component:DeleteComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
