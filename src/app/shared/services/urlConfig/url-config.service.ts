import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlConfigService {
  url:any
  constructor() {
    this.url ='http://localhost:80/'
   }
  public getUrl(){
    return this.url;
  }
}
