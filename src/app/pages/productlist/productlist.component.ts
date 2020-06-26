import { Component, OnInit } from '@angular/core';
import { ProductDataService } from "../../services/product/product-data.service";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  public products = [];

  constructor(private ProductService: ProductDataService) { }

  ngOnInit(): void {
    this.products = this.ProductService.getProducts();
  }

}
