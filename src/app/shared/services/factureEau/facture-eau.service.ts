import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConfigService } from '../urlConfig/url-config.service';

@Injectable({
  providedIn: 'root'
})
export class FactureEauService {

  url:any
  constructor(private httpClient: HttpClient,
              private urlConfig:UrlConfigService) {
                this.url=this.urlConfig.getUrl()
               }

  create(){
    return this.httpClient.post(this.url+'api_gesap/controllers/FactureEau/create.php', {})
  }

  find(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/FactureEau/find.php', {id:id})
  }

  delete(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/FactureEau/delete.php', {id:id})
  }
  
  update(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/FactureEau/update.php', {id:id})
  }

}
