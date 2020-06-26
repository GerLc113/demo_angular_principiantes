import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductDataService } from "../../services/product/product-data.service";
import { Location } from "@angular/common";
import { LocalResolver } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  public product: any = {};

  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductDataService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const product_id = this.route.snapshot.paramMap.get("id");
    [this.product] = this.ProductService.getProductById(product_id);
  }

  regresar() : void {
    this.location.back();
  }

}
