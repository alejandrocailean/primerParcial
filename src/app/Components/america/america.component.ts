import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/DataService/Data.service';
import { DatosPaisesService } from 'src/app/Services/datos-paises.service';


@Component({
  selector: 'app-america',
  templateUrl: './america.component.html',
  styleUrls: ['./america.component.css']
})
export class AmericaComponent implements OnInit {

  america;
  
  constructor(private datos:DataService, private router:Router ) { }

  ngOnInit(): void {
    this.datos.getDatos('https://restcountries.eu/rest/v2/region/Americas')
    .subscribe(
      (data)=>{
         this.america=data;        
      }
    )
  }

  /* detalle(pais){
    this.paisElegido=pais;  
    this.router.navigate(['/detalle'],{queryParams:{elegido:pais.name}})    
    .catch(e=>{
      console.log(e);
    });
  } */


}
