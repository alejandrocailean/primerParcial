import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosPaisesService {

  constructor(protected http: HttpClient) { } 

  getContinentes(region){
    return this.http.get('https://restcountries.eu/rest/v2/region/'+region);
  }

  getPaises(pais){
    return this.http.get('https://restcountries.eu/rest/v2/name/'+pais);
  }
  
}
