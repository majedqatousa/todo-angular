import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditCatComponent } from './edit-cat/edit-cat.component';
import { EdittodoComponent } from './edittodo/edittodo.component';
import { HomeComponent } from './home/home.component';
import { SpecificTodoComponent } from './specific-todo/specific-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'editcat/:id',
    component:EditCatComponent
  },
  {
    path:'editTodo/:id',
    component:EdittodoComponent
  },
  {
    path:'cat/:id',
    component:SpecificTodoComponent
  },
  {
    path:'cat/:id/editTodo/:id',
    component:EdittodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
