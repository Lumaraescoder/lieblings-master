import { Component, OnInit } from '@angular/core';
import { productsDB } from '../../shared/data/products';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/models/products';
import { Subject } from 'rxjs';

@Component({
  selector: 'll-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {
  public products: any = [];
  isLoading = true;
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data) => {
      this.products = data;
      console.log(data)
    });
  }

  // getProducts(): void {

  // }
}