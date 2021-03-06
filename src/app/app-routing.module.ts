import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { DummyComponent } from './dummy/dummy.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'addnote', component:AddNoteComponent},
  { path: 'dummy', component:DummyComponent},
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: "**", redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
