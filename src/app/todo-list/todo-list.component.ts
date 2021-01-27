import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos:any;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getAllTodo();
  }
  deleteTodo(){

  }

  getAllTodo(){
    this.todoService.getAllTodos().subscribe(res =>{
      this.todos =  res
    }

    )
  }
  deleteTdo(id:any){
    this.todoService.deleteTodo(id).subscribe(res =>{
      this.getAllTodo();
    })
  }

  
}
