import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UrlConfigService } from '../urlConfig/url-config.service';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  url:any
  constructor(private HttpClient:HttpClient,
              private config:UrlConfigService) { 
                this.url=this.config.getUrl()
              }
    CreateUser(user){
      return this.HttpClient.post(this.url+'api_gesap/controllers/Utilisateur/create.php', 
     {name:user['name'],
      surname:user['surname'],
      username:user['username'],
      password:user['password'],
      phone:user['phone'],
      mail:user['mail'],
      profil:user['profil'],
      statut:user['statut']
     })
    }
}
