import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http : HttpClient) { }

  getAllTodos(){
    return this.http.get('http://360moms.alhlaq.com/api/allTodo')
  }
  addTodo(data:any){
    return this.http.post('http://360moms.alhlaq.com/api/creatTodo',data)
  }
  getTdoById(id:number){
    return this.http.get('http://360moms.alhlaq.com/api/getTodoById/'+id)

  }
  updateTodo(id:any ,  data:any ){
    return this.http.put('http://360moms.alhlaq.com/api/updateTodo/'+id,data)

  }
  getSpecificTodo(id:any){
    return this.http.get('http://360moms.alhlaq.com/api/getCatTodos/'+id)

  }
  deleteTodo(catId:number){
    return this.http.delete('http://360moms.alhlaq.com/api/deleteTodo/'+catId)
  }
}

