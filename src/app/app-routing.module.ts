import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentsListComponent } from './students-list/students-list.component';


const routes: Routes = [
  {
    path: '',
    component: StudentsListComponent
  },
  {
    path: 'create',
    component: StudentComponent
  },
  {
    path: 'edit',
    component: StudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
