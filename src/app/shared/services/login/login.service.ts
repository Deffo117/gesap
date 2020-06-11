import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConfigService } from '../urlConfig/url-config.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:any
  constructor(private httpClient:HttpClient,
              private config:UrlConfigService ) {
                this.url=this.config.getUrl()
              }

  login(user){
    return this.httpClient.post(this.url+'api_gesap/controllers/Utilisateur/connection.php', {username:user['username'], password:user['password']})
  }


}
