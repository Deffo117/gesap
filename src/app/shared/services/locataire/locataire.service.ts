import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConfigService } from '../urlConfig/url-config.service';

@Injectable({
  providedIn: 'root'
})
export class LocataireService {

  url:any
  constructor(private httpClient: HttpClient,
              private config: UrlConfigService) {this.url=this.config.getUrl() }

  create(){
    return this.httpClient.post(this.url+'api_gesap/controllers/Locataire/create.php', {})
  }

  find(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/Locataire/find.php', {id:id})
  }
  findAll(){
    return this.httpClient.post(this.url+'api_gesap/controllers/Locataire/read.php',{})
  }

  delete(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/Locataire/delete.php', {id:id})
  }

  update(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/Locataire/update.php', {id:id})
  }
  
}
