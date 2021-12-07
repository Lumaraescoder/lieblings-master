import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Products } from '../models/products';

describe('ProductsService', () => {
  let service: ProductsService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });
    service = TestBed.inject(ProductsService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const service: ProductsService = TestBed.inject(ProductsService);
    expect(service).toBeTruthy();
  });

  it('be able to retrieve posts from the API via GET', () => {
    const dummyPosts: Products[] = [
      {
        id: 1,
        name: 'lucas',
        capital: 'Helsinki',
        price: 123123,
        category: 'produtop',
        countInStock: 123,
        description: 'desc',
        rating: 123,
        numReviews: 123,
        reviews: []
      },
      {
        id: 2,
        name: 'goku',
        capital: 'Helsinki',
        price: 123123,
        category: 'produtop',
        countInStock: 123,
        description: 'desc1',
        rating: 123,
        numReviews: 123,
        reviews: []
      },
      {
        id: 3,
        name: 'vegeta',
        capital: 'Helsinki',
        price: 123123,
        category: 'produtop',
        countInStock: 123,
        description: 'desc2',
        rating: 123,
        numReviews: 123,
        reviews: []
      }
    ];

    service.getAll(1).subscribe(ProductsData => {
      expect(ProductsData[0].name).toEqual('lucas');
      expect(ProductsData[0].description).toEqual('desc');

      expect(ProductsData[1].name).toEqual('vegeta');
      expect(ProductsData[1].description).toEqual('desc1');

      expect(ProductsData[2].name).toEqual('goku');
      expect(ProductsData[2].description).toEqual('desc2');

      const request = controller.expectOne('/');
      expect(request.request.method).toBe('GET');
      const req = controller.expectOne('http://localhost:8000/countries');

      request.flush(dummyPosts);
    });
  });
});
