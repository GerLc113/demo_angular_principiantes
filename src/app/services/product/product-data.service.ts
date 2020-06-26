import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  private products = [
    {
      id: 1,
      name: "Manzana",
      category: "Fruta",
      description: "Manazana roja 1Kg",
      price: 25.67
    },
    {
      id: 2,
      name: "Leche Alpura",
      category: "Lacteo",
      description: "Leche entera 1Lt",
      price: 22
    },
    {
      id: 3,
      name: "Pizza Hawaiana",
      category: "Comida rápida",
      description: "Pizza grande",
      price: 180
    }
  ];
  //constructor() { }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.filter(product => product.id == id);
  }

}
