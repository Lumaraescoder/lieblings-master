import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RoutesService } from '../../services/routes.service';

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  submitMessage = ""

  constructor(private authentication: AuthService, private router: RoutesService) { }

  ngOnInit(): void {
  }

  loginSubmit() {
    if (this.username.valid && this.password.valid) {
      this.authentication.authenticateUser({ "username": this.username.value, "password": this.password.value }).subscribe(
        (data) => {
          this.submitMessage = "";
          this.authentication.setBearerToken(data['token']);
          localStorage.setItem('isLoggedIn', 'true');
          this.router.routeToDashboard();
          console.log(data);
          console.log(this.submitMessage)

          console.log('auth', this.authentication)
        },
        (error) => {
          if (error.status === 403) this.submitMessage = "Unauthorized"
          else this.submitMessage = "Http failure response for : 404 Not Found"
        }
      )
    }
  }
}
