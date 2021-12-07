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

  it('be able to retrieve posts from the API bia GET', () => {
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
        description: 'desc',
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
        description: 'desc',
        rating: 123,
        numReviews: 123,
        reviews: []
      }
    ];

    service.getAll(1).subscribe(coursesData => {
      expect(coursesData[0].name).toEqual('vegeta');
      expect(coursesData[0].description).toEqual('Space repetition to learn chess, backed by science');

      const request = controller.expectOne('/');
      expect(request.request.method).toBe('GET');
      request.flush(dummyPosts);
    });
  });
});
