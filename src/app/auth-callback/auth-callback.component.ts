import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from 'oidc-client';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {

  tokenType: string = null;
  accessToken: string = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.completeAuthentication()
      .catch((error) => {
        console.error(`could not complete authentication: ${error}`);
      })
      .then(() => {
        if (this.authService.isLoggedIn()) {
          const user: User = this.authService.getUser();
          this.accessToken = user.access_token;
          this.tokenType = user.token_type;
        }
      }
    );
  }

}
