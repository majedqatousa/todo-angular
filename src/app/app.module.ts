import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CategoryComponent } from './category/category.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import {RouterModule ,  Routes} from '@angular/router';
import { EditCatComponent } from './edit-cat/edit-cat.component';
import { HomeComponent } from './home/home.component';
import { EdittodoComponent } from './edittodo/edittodo.component';
import { SpecificTodoComponent } from './specific-todo/specific-todo.component' 
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CategoryComponent,
    TodoListComponent,
    EditCatComponent,
    HomeComponent,
    EdittodoComponent,
    SpecificTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
