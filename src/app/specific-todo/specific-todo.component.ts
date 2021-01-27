import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-specific-todo',
  templateUrl: './specific-todo.component.html',
  styleUrls: ['./specific-todo.component.css']
})
export class SpecificTodoComponent implements OnInit {
  todos:any;
  id:any;
  constructor(private todoService : TodoService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getSpecificTodo();
  }
  getSpecificTodo(){
    this.todoService.getSpecificTodo(this.id).subscribe(res =>{
      this.todos =  res
    }

    )
  }
  deleteTdo(id:any){
    this.todoService.deleteTodo(id).subscribe(res =>{
      this.getSpecificTodo()
    })
  }
}
