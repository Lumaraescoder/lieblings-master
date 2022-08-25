import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'
import { Products } from '../../models/products'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'll-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() id: Products;
  public productDetails: any;

  constructor(private service: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = + this.route.snapshot.params['id'];
    this.getProductDetails(id);
    console.log(id)
  }

  getProductDetails(id): void {
    this.service.getProductById(id).subscribe((product) => {
      this.productDetails = product;
      console.log(product)
    })
  };
}
