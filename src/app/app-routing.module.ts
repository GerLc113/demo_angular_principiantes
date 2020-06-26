import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';
import { Error404Component } from './pages/error404/error404.component';
import { ProductlistComponent } from './pages/productlist/productlist.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductlistComponent },
  { path: 'detalleProducto/:id', component: ProductdetailComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
