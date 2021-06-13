import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PersonCrudComponent } from './views/person-crud/person-crud.component';
import { PersonCreateComponent } from './components/person/person-create/person-create.component';
import { PersonUpdateComponent } from './components/person/person-update/person-update.component';
import { PersonDeleteComponent } from './components/person/person-delete/person-delete.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "people", component: PersonCrudComponent },
  { path: "people/create", component: PersonCreateComponent },
  { path: "people/update/:id", component: PersonUpdateComponent },
  { path: "people/delete/:id", component: PersonDeleteComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }