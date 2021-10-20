import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
   
   product:Product=new Product();
  constructor() { }

  ngOnInit(): void {
  }
   
  addProduct(){
    console.log(this.product)

  }
}
