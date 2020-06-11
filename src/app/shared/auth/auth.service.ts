import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

@Injectable()
export class AuthService {
  token: string;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService,
              private router: Router) {}

  signupUser(email: string, password: string) {
    //your code for signing up the new user
  }

  signinUser(email: string, password: string) {
    //your code for checking credentials and getting tokens for for signing in user
  }

  logout() {
    this.token = null;
  }

  getToken() {    
    return this.token;
  }

  isAuthenticated() {
    // here you can check if user is authenticated or not through his token 
    /*let user=this.storage.get('utilisateur')
    if(user !=null){return true}
    this.router.navigateByUrl('login')*/
    return true
  }
}
