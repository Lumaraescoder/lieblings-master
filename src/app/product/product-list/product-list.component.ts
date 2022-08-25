import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { productsDB } from '../../shared/data/products';
import { ProductsService } from './../../services/products.service';
@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  products: any = [];
  constructor(private service: ProductsService) { }

  ngOnInit(): void {

  }
}
