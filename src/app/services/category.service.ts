import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  getAllCat(){
    return this.http.get('http://360moms.alhlaq.com/api/allCat')
  }

  addCat(data:any){
   return this.http.post('http://360moms.alhlaq.com/api/creatCat',data);
  }
  deleteCat(catId:number){
    return this.http.delete('http://360moms.alhlaq.com/api/deleteCat/'+catId)
  }
  getCatById(id:number){
    return this.http.get('http://360moms.alhlaq.com/api/getCatById/'+id)

  }
  updateCat(id:any ,  data:any ){
    return this.http.put('http://360moms.alhlaq.com/api/updateCat/'+id,data)

  }
}
