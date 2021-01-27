import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { CategoryService } from '../services/category.service';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:any;
  categories:any;
  msg:any;
  todo = new Todo();
  public form ={
    title:'null',
    date:'null',
    description:'null',
    tags:'null',
    category_id:4
    
  }
  constructor(private todoService: TodoService, private catService:CategoryService ){ }

  ngOnInit(): void {
    this.getAllTodo();
    this.getAllCats();
    this.msg="Error";
  }

  AddTodo(){
    this.todoService.addTodo(this.todo).subscribe(res =>{
      this.getAllTodo();
      this.msg="Todo added sucessfuly ";
      
    }
  
    )
  }
  getAllTodo(){
    this.todoService.getAllTodos().subscribe(res =>{
      this.todos =  res
    }

    )
  }
  // get all the categories from api 
  getAllCats(){
    this.catService.getAllCat().subscribe(res =>{
      this.categories = res ; 
    })
  }
}
