import { TestBed, tick } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from '../models/user';

describe('UserService', () => {
  let service: UserService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('This service should be created', () => {
    const service: UserService = TestBed.inject(UserService);
    expect(service).toBeTruthy();
  });
  it('I will make get request into api', done => {
    const users: User[] = [
      {
        _id: 1,
        name: 'goku',
        email: 'goku@stronger.com.br',
        isAdmin: false
      },
      {
        _id: 2,
        name: 'vegeta',
        email: 'vegeta@maisfraco.com.br',
        isAdmin: false
      }
    ];

    service.getAll(1).subscribe(UsersData => {
      expect(UsersData[0].name).toEqual('goku');
      expect(UsersData[0].email).toEqual('goku@stronger.com.br');

      expect(UsersData[1].name).toEqual('vegeta');
      expect(UsersData[1].email).toEqual('vegeta@maisfraco.com.br');

      const request = controller.expectOne('/');
      expect(request.request.method).toBe('GET');

      const req = controller.expectOne('http://localhost:8000/countries');

      request.flush(users);
    });
  });
});
