import { Injectable } from '@angular/core';
import { UrlConfigService } from '../urlConfig/url-config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChargeService {

  url:any
  constructor(private httpClient: HttpClient,
              private urlconfig: UrlConfigService) { 
              this.url=this.urlconfig.getUrl()
    }

  create(){
    return this.httpClient.post(this.url+'api_gesap/controllers/Charge/create.php', {})
  }

  find(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/Charge/find.php', {id:id})
  }

  delete(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/Charge/delete.php', {id:id})
  }

  update(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/Charge/update.php', {id:id})
  }
  
}
