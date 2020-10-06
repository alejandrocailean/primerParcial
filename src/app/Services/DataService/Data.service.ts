import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
 
constructor(protected http: HttpClient, private router:Router) { }


  getDatos(url){
    return this.http.get(url);
  }

  detalle(pais){
    this.router.navigate(['/detalle'],{queryParams:{elegido:pais}})    
    .catch(e=>{
      console.log(e);
    });
  }



  /* queryparams(ruta:ActivatedRoute):any{
    let aux:string;
    ruta.queryParams
    .subscribe(data=>{
      aux=data.elegido;  
      console.log(aux);    
      return aux; 
    });
  } */

  /*
      colocar en el constructor

      private datos:DataService

  */

  /*  
    Colocar en el ngOnit

    this.datos.getDatos('url')
      .subscribe(
        (data)=>{
          this.variableLocal=data;        
        }
      );
  */


}
