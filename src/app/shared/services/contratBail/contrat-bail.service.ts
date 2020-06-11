import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConfigService } from '../urlConfig/url-config.service';

@Injectable({
  providedIn: 'root'
})
export class ContratBailService {

  url:any
  constructor(private httpClient: HttpClient,
              private urlConfig: UrlConfigService) {
                this.url=this.urlConfig.getUrl()
               }

  create(contrat){
    return this.httpClient.post(this.url+'api_gesap/controllers/Contrat_bail/create.php', {MontantBail:contrat['montant'], DateFinBail:contrat['datefin'], IdAppart:contrat['appartement'], IdLocataire:contrat['locataire']})
  }

  find(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/Contrat_bail/find.php', {id:id})
  }

  delete(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/Contrat_bail/delete.php', {id:id})
  }
  
  update(id){
    return this.httpClient.post(this.url+'api_gesap/controllers/Contrat_bail/update.php', {id:id})
  }

}
