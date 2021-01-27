import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent implements OnInit {
  id:any
  cats:any;
  data:any
  category = new Category();
  constructor( private catServic: CategoryService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getCat();
  }
  getCat(){
    this.catServic.getCatById(this.id).subscribe(res =>{
      console.log(res)
      this.data = res;
      this.category = this.data;
    })
  }
  EditCat(){
    this.catServic.updateCat(this.id,this.category).subscribe(res =>{

    })
  }
}
