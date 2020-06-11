import { Injectable } from '@angular/core';
import { UrlConfigService } from '../urlConfig/url-config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FactureElectriciteService {

  url:any
  constructor(private httpClient:HttpClient,
              private urlConfig:UrlConfigService) {
                this.url=this.urlConfig.getUrl()
               }

  create(){
    return this.httpClient.post(this.url+'api_gesap/controllers/FactureElectricite/create.php', {})
  }

  find(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/FactureElectricite/find.php', {id:id})
  }

  delete(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/FactureElectricite/delete.php', {id:id})
  }
  
  update(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/FactureElectricite/update.php', {id:id})
  }


}
