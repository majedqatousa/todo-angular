import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../models/todo';
import { CategoryService } from '../services/category.service';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
})
export class EdittodoComponent implements OnInit {
  id:any
  todos:any;
  data:any
  todo = new Todo();
  categories:any;
  constructor( private catService : CategoryService, private todoServic: TodoService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getTodo();
    this.getAllCats();

  }
  getTodo(){
    this.todoServic.getTdoById(this.id).subscribe(res =>{
      console.log(res)
      this.data = res;
      this.todo = this.data;
    })
  }
  EditTodo(){
    this.todoServic.updateTodo(this.id,this.todo).subscribe(res =>{
      
    })
  }
    // get all the categories from api 
    getAllCats(){
      this.catService.getAllCat().subscribe(res =>{
        this.categories = res ; 
      })
    }

}
