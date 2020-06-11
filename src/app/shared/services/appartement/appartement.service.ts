import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UrlConfigService } from '../urlConfig/url-config.service';


@Injectable({
  providedIn: 'root'
})
export class AppartementService {
  url:any
  constructor(private httpClient: HttpClient,
              private urlconfig: UrlConfigService) {
                this.url=this.urlconfig.getUrl()
               }

  create(){
      return this.httpClient.post(this.url+'api_gesap/controllers/Appartement/create.php', {})
  }

  find(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/Appartement/find.php', {id:id})
  }

  findAll(){
    return this.httpClient.post(this.url+'api_gesap/controllers/Appartements/read.php', {})
  }

  delete(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/Appartement/delete.php', {id:id})
  }

  update(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/Appartement/update.php', {id:id})
  }

}
