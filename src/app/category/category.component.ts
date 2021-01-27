import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from 'src/app/models/category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  cats:any;
  
  category = new Category();
  public form ={
    name:'',
  }

  constructor(private catService : CategoryService) { }

  ngOnInit(): void {
    this.getCats();
  }
  AddCat(){
    this.catService.addCat(this.category).subscribe(res => {
      console.log(res);
      this.getCats();
    })
   
  }
  getCats(){
    this.catService.getAllCat().subscribe(res =>{
      this.cats = res
    })
  }
  editCat(id:number){
    console.log(id);
  }
  deleteCat(id:number){
    this.catService.deleteCat(id).subscribe(res =>{
      this.getCats();
    })
    
  
  }
}
