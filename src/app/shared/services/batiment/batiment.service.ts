import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConfigService } from '../urlConfig/url-config.service';

@Injectable({
  providedIn: 'root'
})
export class BatimentService {

  url:any
  constructor(private httpClient: HttpClient,
              private urlconfig: UrlConfigService) {
              this.url=this.urlconfig.getUrl()
     }

  create(){
    return this.httpClient.post(this.url+'api_gesap/controllers/Batiment/create.php', {})
  }

  find(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/Batiment/find.php', {id:id})
  }

  delete(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/Batiment/delete.php', {id:id})
  }

  update(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/Batiment/update.php', {id:id})
  }
}
